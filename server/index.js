import express from "express";
import cors from "cors";
import pg from "pg";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "node:crypto";
import path from "node:path";

const {Pool}=pg;
const app=express();
const port=Number(process.env.PORT||10000);
const secret=process.env.JWT_SECRET;
if(!secret||!process.env.DATABASE_URL){console.error("DATABASE_URL and JWT_SECRET are required.");process.exit(1);}
const pool=new Pool({connectionString:process.env.DATABASE_URL,ssl:process.env.NODE_ENV==="production"?{rejectUnauthorized:false}:false,max:10});
await pool.query(`
CREATE TABLE IF NOT EXISTS learners(
 id UUID PRIMARY KEY,
 name TEXT NOT NULL,
 email TEXT NOT NULL UNIQUE,
 password_hash TEXT NOT NULL,
 role TEXT NOT NULL DEFAULT 'learner' CHECK(role IN ('learner','admin')),
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 last_seen_at TIMESTAMPTZ
);
CREATE TABLE IF NOT EXISTS learner_progress(
 learner_id UUID PRIMARY KEY REFERENCES learners(id) ON DELETE CASCADE,
 progress JSONB NOT NULL DEFAULT '{}'::jsonb,
 updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS assessment_attempts(
 id UUID PRIMARY KEY,
 learner_id UUID NOT NULL REFERENCES learners(id) ON DELETE CASCADE,
 assessment_type TEXT NOT NULL,
 module_id TEXT NOT NULL,
 total INTEGER NOT NULL,
 correct INTEGER NOT NULL,
 submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS assessment_learner_date_idx ON assessment_attempts(learner_id,submitted_at DESC);
CREATE TABLE IF NOT EXISTS learner_subscriptions(
 learner_id UUID PRIMARY KEY REFERENCES learners(id) ON DELETE CASCADE,
 status TEXT NOT NULL DEFAULT 'free' CHECK(status IN ('free','active','expired')),
 expires_at TIMESTAMPTZ,
 updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS subscription_requests(
 learner_id UUID PRIMARY KEY REFERENCES learners(id) ON DELETE CASCADE,
 status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','approved','declined')),
 requested_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
`);
app.use(cors({origin(origin,cb){const allowed=(process.env.CLIENT_ORIGIN||"").split(",").map(x=>x.trim()).filter(Boolean);if(!origin||!allowed.length||allowed.includes(origin))return cb(null,true);return cb(new Error("Origin not allowed"));},credentials:true}));
app.use(express.json({limit:"1mb"}));
const attempts=new Map();
function limit(req,res,next){const key=(req.ip||"unknown")+":"+req.path,now=Date.now(),entry=attempts.get(key)||{n:0,until:now+60000};if(now>entry.until){entry.n=0;entry.until=now+60000;}entry.n++;attempts.set(key,entry);if(entry.n>25)return res.status(429).json({error:"Too many requests. Try again shortly."});next();}
function sign(user){return jwt.sign({sub:user.id,role:user.role},secret,{expiresIn:"7d"});}
function auth(req,res,next){const token=String(req.headers.authorization||"").replace(/^Bearer\s+/i,"");try{req.claims=jwt.verify(token,secret);next();}catch{return res.status(401).json({error:"Please sign in again."});}}
function admin(req,res,next){if(req.claims?.role!=="admin")return res.status(403).json({error:"Administrator access required."});next();}
const publicUser=row=>({id:row.id,name:row.name,email:row.email,role:row.role});
app.get("/api/health",async(_req,res)=>{try{await pool.query("SELECT 1");res.json({ok:true,database:"connected"});}catch{res.status(503).json({ok:false,database:"unavailable"});}});
app.post("/api/auth/register",limit,async(req,res)=>{const name=String(req.body?.name||"").trim(),email=String(req.body?.email||"").trim().toLowerCase(),password=String(req.body?.password||"");if(name.length<2||name.length>100||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||password.length<8)return res.status(400).json({error:"Enter your name, a valid email and a password of at least 8 characters."});try{const id=crypto.randomUUID(),hash=await bcrypt.hash(password,12);const result=await pool.query("INSERT INTO learners(id,name,email,password_hash) VALUES($1,$2,$3,$4) RETURNING id,name,email,role",[id,name,email,hash]);await pool.query("INSERT INTO learner_progress(learner_id,progress) VALUES($1,$2)",[id,JSON.stringify({completed:[],revealed:[],review:[],attempts:[],points:0,streak:0,tasks:[]})]);await pool.query("INSERT INTO learner_subscriptions(learner_id) VALUES($1)",[id]);const user=publicUser(result.rows[0]);res.status(201).json({token:sign(user),user,progress:{completed:[],revealed:[],review:[],attempts:[],points:0,streak:0,tasks:[]}});}catch(error){if(error.code==="23505")return res.status(409).json({error:"An account with this email already exists."});console.error(error);res.status(500).json({error:"Could not create your account."});}});
app.post("/api/auth/login",limit,async(req,res)=>{const email=String(req.body?.email||"").trim().toLowerCase(),password=String(req.body?.password||"");const result=await pool.query("SELECT id,name,email,password_hash,role FROM learners WHERE email=$1",[email]);const row=result.rows[0];if(!row||!(await bcrypt.compare(password,row.password_hash)))return res.status(401).json({error:"Email or password is incorrect."});await pool.query("UPDATE learners SET last_seen_at=NOW() WHERE id=$1",[row.id]);const p=await pool.query("SELECT progress FROM learner_progress WHERE learner_id=$1",[row.id]);const user=publicUser(row);res.json({token:sign(user),user,progress:p.rows[0]?.progress||{}});});
app.get("/api/auth/me",auth,async(req,res)=>{if(req.claims.role==="admin")return res.json({user:{id:"platform-admin",name:"Platform administrator",email:"",role:"admin"}});const r=await pool.query("SELECT id,name,email,role FROM learners WHERE id=$1",[req.claims.sub]);if(!r.rows[0])return res.status(401).json({error:"Account not found."});res.json({user:publicUser(r.rows[0])});});
app.get("/api/progress",auth,async(req,res)=>{const r=await pool.query("SELECT progress,updated_at FROM learner_progress WHERE learner_id=$1",[req.claims.sub]);res.json({progress:r.rows[0]?.progress||{},updatedAt:r.rows[0]?.updated_at||null});});
app.put("/api/progress",auth,async(req,res)=>{const progress=req.body?.progress;if(!progress||typeof progress!=="object"||Array.isArray(progress))return res.status(400).json({error:"A valid progress object is required."});const safe=JSON.stringify(progress);if(safe.length>500000)return res.status(413).json({error:"Progress data exceeds the allowed size."});await pool.query("INSERT INTO learner_progress(learner_id,progress,updated_at) VALUES($1,$2::jsonb,NOW()) ON CONFLICT(learner_id) DO UPDATE SET progress=EXCLUDED.progress,updated_at=NOW()",[req.claims.sub,safe]);res.json({ok:true});});
app.post("/api/assessments",auth,async(req,res)=>{const type=String(req.body?.type||"");const moduleId=String(req.body?.module||"");const total=Number(req.body?.total),correct=Number(req.body?.correct);if(!["RAT","CAT"].includes(type)||!["cashflows","timevalue","rates","discounting","annuities","loans","sinking","depreciation"].includes(moduleId)||!Number.isInteger(total)||total<1||total>25||!Number.isInteger(correct)||correct<0||correct>total)return res.status(400).json({error:"Invalid assessment result."});await pool.query("INSERT INTO assessment_attempts(id,learner_id,assessment_type,module_id,total,correct) VALUES($1,$2,$3,$4,$5,$6)",[crypto.randomUUID(),req.claims.sub,type,moduleId,total,correct]);res.status(201).json({ok:true});});
app.post("/api/subscription/request",auth,async(req,res)=>{await pool.query("INSERT INTO subscription_requests(learner_id,status,requested_at) VALUES($1,'pending',NOW()) ON CONFLICT(learner_id) DO UPDATE SET status='pending',requested_at=NOW()",[req.claims.sub]);res.json({ok:true,status:"pending"});});
app.get("/api/subscription/status",auth,async(req,res)=>{const r=await pool.query("SELECT status,expires_at FROM learner_subscriptions WHERE learner_id=$1",[req.claims.sub]);res.json({status:r.rows[0]?.status||"free",expiresAt:r.rows[0]?.expires_at||null});});
app.post("/api/admin/login",limit,async(req,res)=>{if(!process.env.ADMIN_PASSWORD)return res.status(503).json({error:"Admin access has not been configured."});if(String(req.body?.password||"")!==process.env.ADMIN_PASSWORD)return res.status(401).json({error:"Administrator password is incorrect."});const user={id:"platform-admin",name:"Platform administrator",email:"",role:"admin"};res.json({token:sign(user),user});});
app.get("/api/admin/overview",auth,admin,async(_req,res)=>{const [users,attempts,requests]=await Promise.all([pool.query("SELECT COUNT(*)::int AS count FROM learners"),pool.query("SELECT COUNT(*)::int AS count FROM assessment_attempts"),pool.query("SELECT COUNT(*)::int AS count FROM subscription_requests WHERE status='pending'")]);res.json({learners:users.rows[0].count,assessments:attempts.rows[0].count,pendingSubscriptions:requests.rows[0].count});});
app.get("/api/admin/learners",auth,admin,async(_req,res)=>{const r=await pool.query("SELECT l.id,l.name,l.email,l.created_at,l.last_seen_at,COALESCE(s.status,'free') AS subscription FROM learners l LEFT JOIN learner_subscriptions s ON s.learner_id=l.id ORDER BY l.created_at DESC LIMIT 500");res.json({learners:r.rows});});
app.post("/api/admin/learners/:id/subscription",auth,admin,async(req,res)=>{const status=req.body?.status;if(!["free","active","expired"].includes(status))return res.status(400).json({error:"Invalid subscription status."});await pool.query("INSERT INTO learner_subscriptions(learner_id,status,expires_at,updated_at) VALUES($1,$2,$3,NOW()) ON CONFLICT(learner_id) DO UPDATE SET status=EXCLUDED.status,expires_at=EXCLUDED.expires_at,updated_at=NOW()",[req.params.id,status,req.body?.expiresAt||null]);res.json({ok:true});});
app.use(express.static(path.resolve("dist"),{maxAge:"1h",index:false}));
app.get("/{*splat}",(req,res)=>{if(req.path.startsWith("/api/"))return res.status(404).json({error:"API route not found."});res.sendFile(path.resolve("dist/index.html"));});
app.listen(port,()=>console.log("SMA 2207 API and web server listening on "+port));
