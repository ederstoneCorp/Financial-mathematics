const TOKEN_KEY="sma2207:token";
export function getToken(){return localStorage.getItem(TOKEN_KEY);}
export function setToken(value:string|null){if(value)localStorage.setItem(TOKEN_KEY,value);else localStorage.removeItem(TOKEN_KEY);}
export async function api<T>(path:string,options:RequestInit={}):Promise<T>{
 const headers=new Headers(options.headers);headers.set("Content-Type","application/json");
 const token=getToken();if(token)headers.set("Authorization","Bearer "+token);
 const response=await fetch("/api"+path,{...options,headers});
 const body=await response.json().catch(()=>({}));
 if(!response.ok)throw new Error(body.error||"Request failed ("+response.status+")");
 return body as T;
}
