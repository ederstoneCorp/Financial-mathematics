/* Master SMA 2207 question bank, modules 1–4. */
window.masterQuestionBank = {
  "cashflows": [
    [
      "Define a cashflow model in discrete time.",
      "A sequence of cashflows c_t at discrete times t=0,1,…,n."
    ],
    [
      "Distinguish an inflow from an outflow.",
      "An inflow is a positive receipt; an outflow is a negative payment, from the stated viewpoint."
    ],
    [
      "Write the vector for -KSh 50,000 at t=0 and receipts of 10,000, 20,000 and 30,000 at years 1–3.",
      "(-50,000, 10,000, 20,000, 30,000)."
    ],
    [
      "Why construct a cashflow timeline?",
      "To align each cashflow with its correct date before setting up an equation of value."
    ],
    [
      "Maintenance costs KSh 5,000 at each year-end for four years; disposal proceeds are KSh 50,000 at year 4. Give the vector.",
      "(0,-5,000,-5,000,-5,000,45,000), assuming final maintenance and disposal occur together."
    ],
    [
      "Define a compound cashflow stream.",
      "A series of multiple cashflows occurring at one or more time intervals."
    ],
    [
      "Give the NPV function for cashflows c_t at rate i.",
      "NPV(i)=Σ c_t(1+i)^(-t), for t=0,…,n."
    ],
    [
      "Define net cashflow at time t.",
      "The algebraic sum of all inflows and outflows at that exact time."
    ],
    [
      "Why cannot cashflows at different dates be added directly?",
      "They must be converted to a common date because of the time value of money."
    ],
    [
      "Give the vector for an initial outflow of 200,000 and six annual receipts of 40,000.",
      "(-200,000,40,000,40,000,40,000,40,000,40,000,40,000)."
    ],
    [
      "Define a contingent cashflow.",
      "A cashflow dependent on an uncertain event, such as survival or default."
    ],
    [
      "Define a certain cashflow.",
      "A cashflow contractually fixed to occur at a specified date."
    ],
    [
      "Define the time horizon.",
      "The total period over which the financial transactions are evaluated."
    ],
    [
      "How is a project classified when NPV is positive?",
      "Value-adding at the stated discount rate and assumptions."
    ],
    [
      "State the sign-change condition relevant to a unique positive IRR.",
      "One sign change implies at most one positive root in the usual polynomial model; it does not guarantee a root exists."
    ],
    [
      "Give a non-conventional cashflow example.",
      "(-100,250,-150), which has multiple sign changes."
    ],
    [
      "What does c_0 usually represent?",
      "The initial capital outlay or purchase price, usually negative to the investor."
    ],
    [
      "Define net terminal value at time n.",
      "AV_n=Σ c_t(1+i)^(n-t)."
    ],
    [
      "How can monthly cashflow dates be indexed in years?",
      "t=0,1/12,2/12,… ."
    ],
    [
      "Define an annuity cashflow structure.",
      "Equal payments made at equal time intervals."
    ],
    [
      "Define a deferred cashflow model.",
      "A model where cashflows start only after a specified waiting period."
    ],
    [
      "How are inflation effects handled in a real cashflow model?",
      "Use real cashflows with a real interest rate consistently."
    ],
    [
      "State the NPV/discount-rate relationship for conventional investments.",
      "NPV decreases as the discount rate increases, under the usual conventional cashflow pattern."
    ],
    [
      "What does accumulation function A(t) do?",
      "It gives the value at time t of one unit invested at time zero."
    ],
    [
      "Is the undiscounted sum of (-1,000,400,400,400) positive?",
      "Yes: -1,000+1,200=+200."
    ]
  ],
  "timevalue": [
    [
      "Give the simple-interest accumulation function.",
      "A(t)=1+it."
    ],
    [
      "Accumulate KSh 50,000 for four years at 10% simple interest.",
      "50,000(1+0.10×4)=KSh 70,000."
    ],
    [
      "Give the compound-interest accumulation function.",
      "A(t)=(1+i)^t."
    ],
    [
      "Accumulate KSh 50,000 for four years at 10% compound interest.",
      "50,000(1.10)^4≈KSh 73,205."
    ],
    [
      "Define principal P.",
      "The initial capital invested or borrowed at time zero."
    ],
    [
      "Distinguish simple and compound interest.",
      "Simple interest applies to original principal only; compound interest also earns interest on accrued interest."
    ],
    [
      "Give the simple commercial discount PV formula.",
      "PV=A(1-dt), subject to the discount factor remaining non-negative."
    ],
    [
      "Find PV of KSh 100,000 due in two years at simple discount 8%.",
      "100,000(1-0.08×2)=KSh 84,000."
    ],
    [
      "Define annual effective interest rate i.",
      "The actual proportional growth in value over one year."
    ],
    [
      "Relate accumulated value, principal and effective rate.",
      "A(n)=P(1+i)^n."
    ],
    [
      "For A(t)=1+0.05t+0.002t², find A(3).",
      "A(3)=1+0.15+0.018=1.168."
    ],
    [
      "For the same A(t), find the effective rate from year 2 to year 3.",
      "A(2)=1.108; A(3)/A(2)-1=1.168/1.108-1≈5.42%."
    ],
    [
      "State basic validity conditions for an accumulation function.",
      "A(0)=1 and A(t)>0; in ordinary non-negative-interest models it is non-decreasing."
    ],
    [
      "What is the accumulated value of one unit after t years at compound interest?",
      "(1+i)^t."
    ],
    [
      "Express effective discount d in terms of effective interest i.",
      "d=i/(1+i)."
    ],
    [
      "Express effective interest i in terms of effective discount d.",
      "i=d/(1-d)."
    ],
    [
      "Give discount factor v in terms of i.",
      "v=(1+i)^(-1)."
    ],
    [
      "Give discount factor v in terms of d.",
      "v=1-d."
    ],
    [
      "Find effective interest equivalent to discount 12%.",
      "i=0.12/0.88≈13.64%."
    ],
    [
      "Find discount equivalent to effective interest 15%.",
      "d=0.15/1.15≈13.04%."
    ],
    [
      "If v=0.85, find i.",
      "i=1/0.85-1≈17.65%."
    ],
    [
      "Find doubling time at 10% compound interest.",
      "t=ln(2)/ln(1.10)≈7.27 years."
    ],
    [
      "State the Rule of 72.",
      "Approximate doubling time in years is 72 divided by the annual rate expressed as a percentage."
    ],
    [
      "Estimate doubling time at 9% using Rule of 72.",
      "72/9=8 years."
    ],
    [
      "Define a variable interest rate model.",
      "A model where the rate i_t changes from one period to another."
    ]
  ],
  "rates": [
    [
      "Define nominal interest i^(m) convertible m-thly.",
      "i^(m)=m[(1+i)^(1/m)-1]."
    ],
    [
      "Relate nominal convertible m-thly interest to effective annual interest.",
      "1+i=(1+i^(m)/m)^m."
    ],
    [
      "Define nominal discount d^(m) convertible m-thly.",
      "d^(m)=m[1-(1-d)^(1/m)], where d is the equivalent annual effective discount."
    ],
    [
      "Relate nominal interest and nominal discount rates.",
      "(1+i^(m)/m)^m=(1-d^(m)/m)^(-m)=1+i."
    ],
    [
      "A nominal 12% rate is convertible monthly. Find the monthly rate.",
      "0.12/12=1% per month."
    ],
    [
      "Find annual effective interest for nominal 12% convertible monthly.",
      "(1.01)^12-1≈12.68%."
    ],
    [
      "Define force of interest δ.",
      "For constant rates, δ=ln(1+i)=lim(m→∞)i^(m)."
    ],
    [
      "Give accumulation function under constant force δ.",
      "A(t)=e^(δt)."
    ],
    [
      "Find effective annual rate equivalent to δ=0.08.",
      "i=e^0.08-1≈8.33%."
    ],
    [
      "Find force equivalent to effective annual rate 12.5%.",
      "δ=ln(1.125)≈11.78%."
    ],
    [
      "Find nominal quarterly interest equivalent to effective annual 10%.",
      "i^(4)=4[(1.10)^(1/4)-1]≈9.65%."
    ],
    [
      "Relate discount factor v to constant force δ.",
      "v=e^(-δ)."
    ],
    [
      "Give accumulation from t1 to t2 under variable force δ(t).",
      "exp(∫ from t1 to t2 δ(t)dt)."
    ],
    [
      "If δ(t)=1/(1+t), find accumulation from 0 to 3.",
      "exp(∫₀³1/(1+t)dt)=exp(ln4)=4."
    ],
    [
      "Find PV of KSh 10,000 due in five years at force 0.07.",
      "10,000e^(-0.35)≈KSh 7,046.88."
    ],
    [
      "Why do banks quote nominal rates?",
      "They are a commercial convention for rates compounded several times per year; the compounding frequency must be specified."
    ],
    [
      "If i^(2)=0.14, find the effective half-year rate.",
      "0.14/2=7% per half-year."
    ],
    [
      "Find nominal quarterly rate equivalent to i^(2)=0.14.",
      "4[(1.07)^(1/2)-1]≈13.78%."
    ],
    [
      "What is lim(m→∞) i^(m)?",
      "The force of interest δ."
    ],
    [
      "What is lim(m→∞) d^(m)?",
      "The force of discount, equal to δ under the corresponding equivalent-rate convention."
    ],
    [
      "If A(t)=e^(0.04t+0.005t²), find δ(t).",
      "δ(t)=d/dt ln A(t)=0.04+0.01t."
    ],
    [
      "Find δ at t=2 for the previous accumulation function.",
      "δ(2)=0.06, or 6%."
    ],
    [
      "State the usual ordering for equivalent rates when m>1.",
      "d<d^(m)<δ<i^(m)<i, under standard positive-rate conventions."
    ],
    [
      "Find two-year growth factor at nominal 16% convertible semi-annually.",
      "(1+0.16/2)^4=(1.08)^4≈1.3605."
    ],
    [
      "Prove 1+i=(1-d)^(-1).",
      "Since d=i/(1+i), 1-d=1/(1+i), so 1+i=(1-d)^(-1)."
    ]
  ],
  "discounting": [
    [
      "Define PV of C_n due in n periods at rate i.",
      "PV=C_n v^n=C_n(1+i)^(-n)."
    ],
    [
      "State the principle of equivalence.",
      "At a common focal date, the value of inflows equals the value of outflows."
    ],
    [
      "Define focal date.",
      "The date to which all cashflows are accumulated or discounted in an equation of value."
    ],
    [
      "Find combined PV of KSh 20,000 due in two years and KSh 30,000 due in four years at 10%.",
      "20,000(1.10)^(-2)+30,000(1.10)^(-4)≈KSh 37,019.33."
    ],
    [
      "How does changing focal date affect an equation-of-value solution?",
      "With consistent compound-interest accumulation, moving all cashflows to another common date preserves the solution."
    ],
    [
      "Find PV of KSh 50,000 due in three years at force 0.09.",
      "50,000e^(-0.27)≈KSh 38,157.??; evaluate using full precision."
    ],
    [
      "Define discounting.",
      "Finding the value at an earlier date of a future amount."
    ],
    [
      "Define NPV.",
      "The sum of all signed cashflows discounted to the chosen valuation date."
    ],
    [
      "Find NPV for outlay KSh 150,000 now and KSh 200,000 in three years at 11%.",
      "-150,000+200,000/(1.11)^3≈-KSh 3,788.77."
    ],
    [
      "Is the previous investment attractive on NPV grounds?",
      "No. Its NPV is negative at 11%."
    ],
    [
      "Define discounted payback period.",
      "Time required for cumulative discounted inflows to recover the initial outlay."
    ],
    [
      "What is the discount factor at t=0?",
      "v^0=1."
    ],
    [
      "If v=0.90, find effective discount d.",
      "d=1-v=10%."
    ],
    [
      "Give PV of a continuous unit payment stream for n years at force δ.",
      "ā_n=∫₀ⁿe^(-δt)dt=(1-e^(-δn))/δ."
    ],
    [
      "Cashflows 100, 200 and 300 occur at years 1, 2 and 3. Give PV at t=0.",
      "PV=100v+200v²+300v³."
    ],
    [
      "Solve 100v+100v²=180 for positive v.",
      "v=(-5+√205)/10≈0.93178; the supplied 0.923 is incorrect."
    ],
    [
      "Give nominal discount d^(m) in terms of annual discount factor v.",
      "d^(m)=m(1-v^(1/m))."
    ],
    [
      "Find PV of KSh 1,000 at each year-end for two years at 8%.",
      "1,000/1.08+1,000/(1.08)^2≈KSh 1,783.26."
    ],
    [
      "How does inflation affect PV calculations?",
      "Discount nominal cashflows at nominal rates and real cashflows at real rates."
    ],
    [
      "State Fisher's exact equation.",
      "1+i=(1+r)(1+h), where i is nominal, r real and h inflation."
    ],
    [
      "Approximate real rate if nominal rate is 15% and inflation is 7%.",
      "Approximately 15%-7%=8%."
    ],
    [
      "Find exact real rate for nominal 15% and inflation 7%.",
      "1.15/1.07-1≈7.48%."
    ],
    [
      "Define time consistency in discounting.",
      "Discounting over a total period in one step equals discounting over successive subperiods using consistent rates."
    ],
    [
      "PV of X due in five years is KSh 50,000 at 12%. Find X.",
      "X=50,000(1.12)^5≈KSh 88,117.08."
    ],
    [
      "Why is discounting the inverse of accumulation?",
      "Accumulation multiplies by (1+i)^t; discounting multiplies by its reciprocal."
    ]
  ]
};

/* Master SMA 2207 question bank, modules 5–8. */
Object.assign(window.masterQuestionBank,{
  "annuities": [
    [
      "Define annuity-immediate.",
      "Equal payments at each period-end."
    ],
    [
      "Give PV of unit annuity-immediate for n periods.",
      "a-angle-n=(1-v^n)/i."
    ],
    [
      "Define annuity-due.",
      "Equal payments at each period-beginning."
    ],
    [
      "Give PV of annuity-due.",
      "ä-angle-n=(1-v^n)/d=(1+i)a-angle-n."
    ],
    [
      "Give accumulated value of annuity-immediate.",
      "s-angle-n=((1+i)^n-1)/i=(1+i)^n a-angle-n."
    ],
    [
      "Give accumulated value of annuity-due.",
      "s-double-dot-angle-n=((1+i)^n-1)/d=(1+i)^n ä-angle-n."
    ],
    [
      "Define perpetuity.",
      "An annuity whose payments continue indefinitely."
    ],
    [
      "Give PV of unit perpetuity-immediate.",
      "1/i."
    ],
    [
      "Give PV of unit perpetuity-due.",
      "1/d."
    ],
    [
      "Find PV of KSh 10,000 yearly for five years at 12%, paid in arrears.",
      "10,000[1-(1.12)^(-5)]/0.12≈KSh 36,047.76."
    ],
    [
      "Find accumulated value at year 5 of that annuity.",
      "10,000[(1.12)^5-1]/0.12≈KSh 63,529.??; use the exact annuity accumulation formula."
    ],
    [
      "Define an increasing annuity with payments 1,2,…,n.",
      "An annuity-immediate whose payment in period t is t; value is Σt v^t."
    ],
    [
      "Define a decreasing annuity with payments n,n-1,…,1.",
      "An annuity-immediate whose payments decrease by one each period; value is the discounted sum of those payments."
    ],
    [
      "Define deferred annuity.",
      "An annuity whose first payment begins after a specified deferment period."
    ],
    [
      "Give PV of an m-deferred n-payment annuity-immediate.",
      "v^m a-angle-n=a-angle-(m+n)-a-angle-m, under the stated timing convention."
    ],
    [
      "Define annuity payable m-thly.",
      "Payments are made m times yearly, often 1/m each time so they total 1 per year."
    ],
    [
      "Give standard PV formula for an annuity payable m-thly.",
      "a-angle-n^(m)=(1-v^n)/i^(m), under the stated payment and timing convention."
    ],
    [
      "Find PV of KSh 50,000 yearly perpetuity-immediate at 10%.",
      "50,000/0.10=KSh 500,000."
    ],
    [
      "Relate annuity-due and annuity-immediate PVs.",
      "ä-angle-n=(1+i)a-angle-n."
    ],
    [
      "Relate accumulated annuity-due and annuity-immediate values.",
      "s-double-dot-angle-n=(1+i)s-angle-n."
    ],
    [
      "If a-angle-10 at 8% is 6.7101, find s-angle-10.",
      "6.7101(1.08)^10≈14.4866."
    ],
    [
      "Define continuous annuity.",
      "Payments made continuously at a constant rate."
    ],
    [
      "Give PV of continuous unit annuity for n years at force δ.",
      "ā-angle-n=(1-e^(-δn))/δ."
    ],
    [
      "Why are annuities important in pension mathematics and mortgages?",
      "They model regular periodic payments such as pension benefits, premiums and loan instalments."
    ],
    [
      "Verify d ä-angle-n=1-v^n.",
      "True, since ä-angle-n=(1-v^n)/d."
    ]
  ],
  "loans": [
    [
      "Define loan amortisation.",
      "Gradual repayment and extinction of a loan through periodic payments."
    ],
    [
      "Give level payment to amortise loan L over n periods at rate i.",
      "P=L/a-angle-n."
    ],
    [
      "What are the two components of an amortisation payment?",
      "Interest and capital repayment."
    ],
    [
      "Relate payment, interest and capital repayment in period t.",
      "P_t=I_t+C_t."
    ],
    [
      "How is period-t interest calculated?",
      "I_t=B_(t-1)i, where B_(t-1) is the balance at the start of the period."
    ],
    [
      "How is capital repayment calculated for a level-payment loan?",
      "C_t=P-I_t; with end-period level payments C_t=P v^(n-t+1)."
    ],
    [
      "Give prospective outstanding balance after payment t.",
      "B_t=P a-angle-(n-t)."
    ],
    [
      "Give retrospective outstanding balance after payment t.",
      "B_t=L(1+i)^t-P s-angle-t."
    ],
    [
      "Find annual payment on KSh 1,000,000 over five years at 15%.",
      "P=1,000,000/a-angle-5 at 15%; calculate using full precision (approximately KSh 298,315)."
    ],
    [
      "Find first-year interest on KSh 1,000,000 at 15%.",
      "1,000,000×0.15=KSh 150,000."
    ],
    [
      "Find first-year capital repayment if payment is KSh 298,311.56.",
      "298,311.56-150,000=KSh 148,311.56."
    ],
    [
      "Find balance after first payment if capital repaid is KSh 148,311.56.",
      "1,000,000-148,311.56=KSh 851,688.44."
    ],
    [
      "How do you verify B1 prospectively?",
      "B1=P a-angle-4 at 15%, using unrounded payment and annuity factors."
    ],
    [
      "Define amortisation schedule.",
      "A table showing each payment, interest, capital repaid and remaining balance."
    ],
    [
      "How do capital repayments change in a level-payment schedule?",
      "They increase as the interest component declines."
    ],
    [
      "How do interest components change in a level-payment schedule?",
      "They decrease as the outstanding balance reduces."
    ],
    [
      "Define variable repayment loan.",
      "A loan with non-level payments, e.g. constant principal repayments plus declining interest."
    ],
    [
      "Give period-t payment for constant principal repayment C=L/n.",
      "P_t=L/n+[L-(t-1)L/n]i."
    ],
    [
      "Define rounding adjustment in a loan schedule.",
      "A small adjustment, often to the final instalment, to account for currency rounding."
    ],
    [
      "Define loan refinancing.",
      "Replacing an existing loan with a new agreement, potentially at a different rate or term."
    ],
    [
      "Give balance after three years on KSh 500,000 amortised over ten years at 12%.",
      "B3=(500,000/a-angle-10)×a-angle-7; compute with exact factors and consistent timing."
    ],
    [
      "Define early loan redemption.",
      "Repaying the outstanding loan balance before scheduled maturity."
    ],
    [
      "Why may lenders charge early redemption penalties?",
      "To compensate for contractual costs or expected lost interest, subject to law and the agreement."
    ],
    [
      "Relate consecutive capital repayments in a level-payment loan.",
      "C_(t+1)=C_t(1+i)."
    ],
    [
      "Relate consecutive interest components.",
      "I_(t+1)=I_t-iC_t=I_t(1+i)-iP."
    ]
  ],
  "sinking": [
    [
      "Define sinking fund.",
      "A fund built through periodic deposits and investment returns to meet a future liability."
    ],
    [
      "Distinguish amortisation from a sinking-fund loan.",
      "Amortisation repays principal in instalments; a sinking-fund loan may pay interest while principal is accumulated separately for maturity."
    ],
    [
      "Give annual total cost of sinking-fund borrowing L at loan rate i and fund rate j over n years.",
      "Li+L/s-angle-n at rate j."
    ],
    [
      "Define bond.",
      "A debt security promising coupon payments and a redemption payment."
    ],
    [
      "Define bond coupon rate g.",
      "The rate applied to nominal/par value to determine coupon payments."
    ],
    [
      "Define redemption value C.",
      "The amount paid to the bondholder at redemption or maturity."
    ],
    [
      "Give price of bond redeemable at C after n periods with coupon Cg and yield i.",
      "P=Cg a-angle-n+C v^n."
    ],
    [
      "When is a bond purchased at a premium?",
      "When its price exceeds redemption value; normally coupon rate exceeds comparable yield."
    ],
    [
      "When is a bond purchased at a discount?",
      "When its price is below redemption value; normally coupon rate is below comparable yield."
    ],
    [
      "Price KSh 100,000 bond, five years, 14% annual coupon, 12% yield, redeemed at par.",
      "P=14,000a-angle-5 at 12%+100,000(1.12)^(-5)≈KSh 107,209.9."
    ],
    [
      "Is the bond in the previous question at premium or discount?",
      "Premium: price exceeds KSh 100,000 and coupon rate exceeds yield."
    ],
    [
      "Define clean or flat bond price.",
      "Quoted price excluding accrued interest."
    ],
    [
      "Define dirty or full bond price.",
      "Settlement price including accrued interest; clean price plus accrued interest."
    ],
    [
      "Define ex-coupon bond price.",
      "Price under market rules where the buyer is not entitled to the next coupon; not a universal synonym for clean price."
    ],
    [
      "Define yield to maturity.",
      "The yield equating bond price to PV of its remaining coupons and redemption payment."
    ],
    [
      "State a standard Makeham-style bond valuation identity.",
      "P=Cg a-angle-n+C v^n; rearrangements depend on definitions and assumptions."
    ],
    [
      "Define index-linked bond.",
      "A bond whose coupon and/or redemption amounts are adjusted by an inflation index."
    ],
    [
      "Define Macaulay duration.",
      "The present-value-weighted average time of a bond's cashflows."
    ],
    [
      "Give Macaulay duration formula.",
      "D_mac=Σ[t C_t v^t]/Σ[C_t v^t], with consistent time units."
    ],
    [
      "Define modified duration.",
      "A measure of price sensitivity; for annual effective yield D_mod=D_mac/(1+i)."
    ],
    [
      "Relate percentage price change to modified duration.",
      "ΔP/P≈-D_mod Δi for a small yield change under matching conventions."
    ],
    [
      "Define convexity.",
      "A measure of curvature in the bond price-yield relationship."
    ],
    [
      "Define Kenyan Treasury bills.",
      "Short-term Government of Kenya securities, commonly issued with 91-, 182- and 364-day maturities."
    ],
    [
      "Give T-bill price under investment-yield and discount-yield conventions.",
      "Investment yield: P=FV/[1+r(t/365)]. Discount yield: P=FV[1-d(t/365)]. State convention and day-count basis."
    ],
    [
      "Price a 182-day KSh 1,000,000 T-bill at 15% annual discount yield.",
      "1,000,000[1-0.15(182/365)]≈KSh 925,205.48."
    ],
    [
      "Why do institutions use sinking funds?",
      "To accumulate resources systematically for future debt redemption or replacement liabilities."
    ]
  ],
  "depreciation": [
    [
      "Define depreciation.",
      "Systematic allocation of an asset's depreciable cost over its useful life."
    ],
    [
      "Give annual straight-line depreciation.",
      "D=(C-S)/n."
    ],
    [
      "Find straight-line depreciation for cost 600,000, scrap 60,000, life six years.",
      "(600,000-60,000)/6=KSh 90,000 yearly."
    ],
    [
      "Give reducing-balance book value.",
      "W_t=C(1-d)^t."
    ],
    [
      "Find reducing-balance rate from cost C, scrap S and life n.",
      "d=1-(S/C)^(1/n)."
    ],
    [
      "Find rate for C=500,000, S=50,000, n=5.",
      "1-(0.1)^(1/5)≈36.90%."
    ],
    [
      "Define sinking-fund depreciation.",
      "A method accumulating deposits and fund interest to replace the depreciable amount."
    ],
    [
      "Give annual sinking-fund depreciation deposit.",
      "D=(C-S)/s-angle-n=(C-S)i/[(1+i)^n-1]."
    ],
    [
      "Define capital gain or loss on disposal.",
      "Net disposal proceeds minus book value at disposal."
    ],
    [
      "Define portfolio yield.",
      "A yield measure equating portfolio price to projected portfolio cashflows; it is not generally a simple weighted average of individual yields."
    ],
    [
      "Define immunisation.",
      "Structuring assets and liabilities so surplus is protected against specified small interest-rate movements."
    ],
    [
      "State classical Redington immunisation conditions.",
      "PV assets=PV liabilities; durations match; asset convexity/dispersion exceeds liability convexity/dispersion under the model."
    ],
    [
      "Define stochastic interest-rate model.",
      "A model treating future rates as random variables or stochastic processes."
    ],
    [
      "Define deterministic interest-rate model.",
      "A model in which future rates are specified rather than random."
    ],
    [
      "Define force of mortality μ_x.",
      "Instantaneous rate of death at age x, conditional on survival to that age."
    ],
    [
      "Express survival probability using force of mortality.",
      "{}_t p_x=exp[-∫₀ᵗ μ_(x+s)ds]."
    ],
    [
      "Define endowment assurance.",
      "A life policy paying on death during a term or on survival to the term's end."
    ],
    [
      "Give annual whole-life annuity-due symbol and expression.",
      "ä_x=Σ from t=0 to infinity of v^t·{}_t p_x, under annual payment convention."
    ],
    [
      "Define net premium.",
      "Premium based on expected benefits using mortality and interest assumptions, before expense loadings."
    ],
    [
      "Define gross premium.",
      "Net premium plus expense and other loadings."
    ],
    [
      "Define policy reserve at duration t.",
      "Prospective value of future benefits less prospective value of future premiums, under the valuation basis."
    ],
    [
      "State Thiele's differential equation conceptually.",
      "The reserve derivative combines interest accumulation, premium cashflows and mortality-related benefit jumps; exact signs depend on the reserve convention."
    ],
    [
      "Give symbol for term assurance of 1 payable at end of year of death within n years.",
      "A^1_(x:n), or equivalent notation as defined by the course."
    ],
    [
      "Why is financial mathematics important for actuarial solvency testing?",
      "It supports quantitative valuation of assets and uncertain liabilities and tests adequacy of capital."
    ],
    [
      "Why is SMA 2207 relevant to maths and computer science students?",
      "It develops quantitative modelling, discounting, cashflow and optimisation skills used in finance, fintech and actuarial analytics."
    ]
  ]
});
