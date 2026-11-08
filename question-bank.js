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
