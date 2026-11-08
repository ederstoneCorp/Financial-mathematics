# SMA 2207 Financial Mathematics I — Study Guide

This guide expands the platform's working course pathway into a study sequence. It uses the supplied ActEd CT1 Combined Materials Pack (2013) as a mathematical reference where its chapters match the topics being studied. All worked examples and practice questions below are newly written.

> **Scope note:** CT1 is an actuarial subject and is not the JKUAT SMA 2207 syllabus. This guide is a filtered study resource, not a claim that every listed section is examinable. The course-scope map records which topics are supported by the working SMA 2207 coverage and which remain supplementary pending the lecturer's outline.

---

## 1. Cashflow models and timelines

### 1.1 What a cashflow model records

A cashflow model records the amounts paid and received, together with the dates on which they occur. It is useful to state the viewpoint before assigning signs:

- money received by the person being modelled: positive;
- money paid by that person: negative.

For a discrete cashflow at time t,

\[
C_t=\text{cash inflow at }t-\text{cash outflow at }t.
\]

The net cashflow model is a dated sequence \(C_0,C_1,\ldots,C_n\). A payment of KSh 40,000 today followed by receipts of KSh 15,000, KSh 15,000 and KSh 20,000 at the ends of the next three years is represented by

| Time | 0 | 1 | 2 | 3 |
|---|---:|---:|---:|---:|
| Cashflow (KSh) | −40,000 | +15,000 | +15,000 | +20,000 |

A timeline prevents a common error: treating amounts at different dates as though they were immediately comparable.

### 1.2 Cashflow classification

- **Single payment:** one payment or receipt at a specified date.
- **Level annuity:** equal payments at regular intervals.
- **Unequal stream:** payments differ in amount.
- **Annuity-immediate:** payment at the end of each period.
- **Annuity-due:** payment at the beginning of each period.
- **Continuous stream:** payments are modelled as arriving at a rate over time.

### Worked example

A borrower receives KSh 80,000 today and pays KSh 25,000 at the end of each of the next four years. From the borrower's viewpoint, the cashflows are +80,000 at time 0 and −25,000 at times 1, 2, 3 and 4. From the lender's viewpoint, all signs reverse. The underlying transaction is the same; only the viewpoint changes.

### Check your understanding

1. A person pays KSh 12,000 now and receives KSh 14,000 in one year. Write the two cashflows from that person's viewpoint.
2. Explain why a timeline is needed before discounting a set of payments.

**Answers:** (1) −12,000 at time 0; +14,000 at time 1. (2) The amount and timing of each cashflow determine its accumulation or discount factor.

---

## 2. Simple interest and compound interest

Let \(P\) be the principal, \(i\) the effective interest rate per period, \(n\) the number of periods and \(A\) the accumulated amount.

### 2.1 Simple interest

Under simple interest, interest in each period is calculated on the original principal. The interest earned each period is \(Pi\), so after n periods:

\[
A=P+nPi=P(1+in).
\]

The total interest is \(I=Pin\). The accumulation is linear in n.

### 2.2 Compound interest

Under compound interest, interest is added to the account and earns interest in later periods:

\[
A=P(1+i)^n.
\]

The present value of an amount A due after n periods is

\[
P=\frac{A}{(1+i)^n}=A v^n,\qquad v=(1+i)^{-1}.
\]

The factor \((1+i)^n\) accumulates a present amount; \(v^n\) discounts a future amount.

### Worked example A: compound accumulation

KSh 100,000 is invested for 3 years at 8% effective per annum.

\[
A=100,000(1.08)^3=\boxed{\text{KSh }125,971.20}.
\]

The compound interest earned is KSh 25,971.20.

### Worked example B: compare simple and compound

For the same principal, rate and term:

- simple: \(100,000(1+0.08\times3)=\text{KSh }124,000\);
- compound: \(100,000(1.08)^3=\text{KSh }125,971.20\).

Compound accumulation is higher because interest is earned on earlier interest.

### Worked example C: present value

Find the amount to invest now to obtain KSh 15,000 in 2 years at 10% effective per annum.

\[
PV=15,000(1.10)^{-2}=\boxed{\text{KSh }12,396.69}.
\]

### Exam method

1. Identify whether the question specifies simple or compound interest.
2. Identify the unit period for the rate.
3. Convert the time into the same period count.
4. Decide whether the question asks for accumulation or present value.
5. Substitute without rounding intermediate values prematurely.
6. State the final currency and appropriate accuracy.

### Practice

1. Calculate the accumulated value of KSh 75,000 for 4 years at 6% compound interest.
2. Find the present value of KSh 30,000 due in 3 years at 8% effective.
3. Find the simple-interest accumulation of KSh 50,000 for 18 months at 12% p.a.

**Answers:** (1) KSh 94,686.19 (approximately). (2) KSh 23,815.73 (approximately). (3) KSh 59,000.

---

## 3. Discount rates and equivalent rates

### 3.1 Simple discount

If an amount C is due after n years and simple discount at rate d per annum is applied, the present value is

\[
PV=C(1-nd).
\]

The discount is calculated from the amount due, not from a progressively reduced balance. This is different from simple interest.

### 3.2 Compound discount

For an effective annual discount rate d, the present value of C due in n years is

\[
PV=C(1-d)^n.
\]

The compound discount factor per period is \(v=1-d\).

### 3.3 Effective interest and discount

For equivalent effective rates over one period:

\[
1+i=\frac{1}{1-d},\qquad
d=\frac{i}{1+i},\qquad
i=\frac{d}{1-d}.
\]

The interest rate i is measured relative to the amount at the start of the period; the discount rate d is measured relative to the amount due at the end.

### 3.4 Equivalent rates over a common term

Two rates are equivalent over a specified term if they produce the same accumulation factor over that term. The reliable method is to equate accumulation factors, not to guess a conversion rule.

For example, a simple annual rate of 3% over 4 years gives the factor

\[
1+4(0.03)=1.12.
\]

The equivalent effective annual rate j satisfies

\[
(1+j)^4=1.12,
\quad j=1.12^{1/4}-1.
\]

### Worked example: effective discount

If the effective annual interest rate is 10%,

\[
d=\frac{0.10}{1.10}=0.090909\ldots
=\boxed{9.0909\%}.
\]

### Practice

1. Convert an effective interest rate of 8% into its equivalent effective discount rate.
2. Find the present value of KSh 20,000 due in 2 years using a compound discount rate of 5% p.a.
3. Find the effective annual rate equivalent to 4% simple interest over 5 years.

**Answers:** (1) 7.4074%. (2) KSh 18,050. (3) Solve \((1+j)^5=1.20\); \(j=1.20^{1/5}-1\), approximately 3.714%.

---

## 4. Nominal and effective rates

A nominal annual rate convertible m times per year is quoted as \(j^{(m)}\). The rate applied each conversion period is \(j^{(m)}/m\). The effective annual rate is

\[
i=\left(1+\frac{j^{(m)}}{m}\right)^m-1.
\]

To convert an effective annual rate i into an equivalent nominal rate convertible m-thly:

\[
j^{(m)}=m\left((1+i)^{1/m}-1\right).
\]

### Worked example

A bank quotes 12% nominal per annum convertible quarterly.

Quarterly rate:

\[
\frac{0.12}{4}=0.03=3\%.
\]

Effective annual rate:

\[
i=(1.03)^4-1=0.12550881
=\boxed{12.5509\%}.
\]

### Monthly conversion

A nominal 12% p.a. convertible monthly gives

\[
i=(1+0.12/12)^{12}-1
=\boxed{12.6825\%\text{ effective p.a.}}.
\]

### Force of interest

For a constant force of interest \(\delta\), accumulation over t years is \(e^{\delta t}\). Its equivalent effective annual rate is

\[
i=e^\delta-1,\qquad \delta=\ln(1+i).
\]

For a time-dependent force \(\delta(t)\), the accumulation factor from time s to time t is

\[
A(s,t)=\exp\left(\int_s^t\delta(u)\,du\right).
\]

### Exam checklist

- Is the rate nominal or effective?
- If nominal, how many conversions occur each year?
- What is the payment or valuation period?
- Is the requested answer annual, monthly, quarterly or another period?
- Are you being asked for an interest rate or a discount rate?

### Practice

1. Convert 9% nominal convertible monthly into an effective annual rate.
2. Find the nominal annual rate convertible quarterly equivalent to 8% effective annual interest.
3. Find the force of interest equivalent to 6% effective annual interest.

**Answers:** (1) \((1+0.09/12)^{12}-1\), approximately 9.3807%. (2) \(4((1.08)^{1/4}-1)\), approximately 7.769%. (3) \(\ln(1.06)\), approximately 5.826%.

---

## 5. Real and money interest rates

A money (nominal) rate describes growth in currency units. A real rate describes growth after allowing for inflation. If the money rate is \(i_m\), the real rate is \(i_r\), and inflation is r over the same period:

\[
1+i_m=(1+i_r)(1+r).
\]

Therefore,

\[
i_r=\frac{1+i_m}{1+r}-1.
\]

### Worked example

An investment earns 9% while prices rise by 5%.

\[
i_r=\frac{1.09}{1.05}-1=0.038095\ldots
=\boxed{3.8095\%}.
\]

Subtracting 5% from 9% gives 4%, which is only an approximation.

### Practice

An account earns 11% while inflation is 7%. Calculate the exact real rate.

**Answer:** \(1.11/1.07-1\), approximately 3.7383%.

---

## 6. Discounting and accumulation of dated cashflows

When cashflows occur at different times, move every amount to a common focal date. At a constant effective rate i per period, the present value at time zero is

\[
PV_0=\sum_{t=0}^{n}C_t(1+i)^{-t}.
\]

The accumulated value at time n is

\[
AV_n=\sum_{t=0}^{n}C_t(1+i)^{n-t}.
\]

For varying effective rates \(i_1,i_2,\ldots\), the accumulation factor from time 0 to time n is

\[
A(0,n)=\prod_{k=1}^{n}(1+i_k).
\]

A cashflow at time t is discounted using only the factors between time 0 and t.

### Worked example

A project has the following receipts: KSh 10,000 at the end of year 1 and KSh 15,000 at the end of year 2. The effective annual rate is 10%.

\[
PV_0=\frac{10,000}{1.10}+\frac{15,000}{1.10^2}
=\boxed{\text{KSh }21,487.60}.
\]

If there is an initial cost of KSh 20,000 at time 0, the net present value is KSh 1,487.60.

### Equations of value

An equation of value equates the value of all receipts and payments at a selected focal date. The focal date can be selected for convenience, but every cashflow must be accumulated or discounted consistently.

### Worked example

A debt of KSh 10,000 is due in one year and KSh 12,000 in two years. Replace both with one payment X at the end of year 2. At 10% effective annually:

\[
X=10,000(1.10)+12,000=\boxed{\text{KSh }23,000}.
\]

### Practice

A person receives KSh 8,000 in one year and KSh 12,000 in three years. Find the present value at 8% effective annually.

**Answer:** \(8,000/1.08+12,000/1.08^3\), approximately KSh 16,219.97.

---

## 7. Annuities

An annuity is a sequence of payments at regular intervals. Payment timing must be identified before choosing a formula.

Let R be the payment per period, i the effective rate per payment period, and n the number of payments.

### 7.1 Annuity-immediate

Payments occur at the end of each period. The present value is

\[
a_{\overline n|i}=\frac{1-(1+i)^{-n}}{i}.
\]

Therefore,

\[
PV=R a_{\overline n|i}.
\]

The accumulated value immediately after the final payment is

\[
s_{\overline n|i}=\frac{(1+i)^n-1}{i},
\qquad AV=R s_{\overline n|i}.
\]

### 7.2 Annuity-due

Payments occur at the beginning of each period. Each payment is invested or discounted for one extra period compared with an annuity-immediate:

\[
\ddot a_{\overline n|i}=(1+i)a_{\overline n|i},
\qquad
\ddot s_{\overline n|i}=(1+i)s_{\overline n|i}.
\]

### 7.3 Deferred annuity

If the first payment is deferred, first value the annuity one period before its first payment, then discount that value back to the valuation date. Draw the timeline to identify the number of deferral periods.

### 7.4 Perpetuity

A level perpetuity-immediate pays R at the end of every period forever:

\[
PV=\frac{R}{i}.
\]

A perpetuity-due pays the first amount immediately:

\[
PV=\frac{R(1+i)}{i}.
\]

### Worked example

Find the present value of KSh 8,000 paid at each year-end for 5 years at 10% effective annually.

\[
PV=8,000\left(\frac{1-1.10^{-5}}{0.10}\right)
=\boxed{\text{KSh }30,326.29}.
\]

### Zero-interest case

If i = 0, do not divide by i in the annuity formula. The present value and accumulated value of n equal payments are both simply \(Rn\).

### Practice

1. Find the accumulated value of KSh 2,000 paid at each year-end for 6 years at 5%.
2. Find the present value of KSh 3,000 paid at the beginning of each year for 4 years at 8%.
3. Find the present value of a perpetuity-immediate paying KSh 1,200 per year at 6%.

**Answers:** (1) \(2,000((1.05)^6-1)/0.05\), approximately KSh 13,601.91. (2) \(3,000(1.08)a_{\overline4|0.08}\), approximately KSh 10,430. (3) KSh 20,000.

---

## 8. Loan repayment and amortisation schedules

A level-payment loan is repaid by instalments. Each instalment consists of interest on the outstanding balance and a capital repayment.

\[
\text{Instalment}=\text{Interest for period}+\text{Capital repaid}.
\]

For a loan L repaid by n equal end-of-period instalments at effective rate i per payment period:

\[
R=\frac{L}{a_{\overline n|i}}
=\frac{Li}{1-(1+i)^{-n}}.
\]

The balance immediately after payment k can be calculated prospectively as the present value of the remaining payments:

\[
L_k=R a_{\overline{n-k}|i}.
\]

A retrospective method accumulates the original loan and subtracts the accumulated value of payments already made.

### Worked example

A KSh 100,000 loan is repaid monthly over 24 months. The nominal annual rate is 12% convertible monthly.

Monthly rate:

\[
i=0.12/12=0.01.
\]

Monthly instalment:

\[
R=\frac{100,000(0.01)}{1-(1.01)^{-24}}
=\boxed{\text{KSh }4,707.35}.
\]

The total of 24 instalments is approximately KSh 112,976.33. The total interest is approximately KSh 12,976.33.

### Constructing a loan schedule

For each payment period:

1. Opening balance = previous period's closing balance.
2. Interest = opening balance × periodic interest rate.
3. Capital repaid = instalment − interest.
4. Closing balance = opening balance − capital repaid.

| Period | Opening balance | Interest | Instalment | Capital repaid | Closing balance |
|---|---:|---:|---:|---:|---:|
| 1 | L | Li | R | R − Li | L − (R − Li) |

The interest portion generally falls over time while the capital portion rises, provided the rate and instalment remain fixed.

### Changed interest rates

If the interest rate changes after payment k, first determine the outstanding balance at that date. Then calculate a new instalment using the new periodic rate and the number of remaining payments. Do not apply the new rate retrospectively to earlier periods.

### Practice

A loan of KSh 60,000 is repaid by 12 equal monthly instalments at 1% effective per month. Find the instalment.

**Answer:** \(60,000(0.01)/(1-1.01^{-12})\), approximately KSh 5,332.93.

---

## 9. Sinking funds

A sinking fund is built by depositing regular amounts so that a target sum is available at a future date. For deposits R at the end of each period:

\[
S=R s_{\overline n|i}
=R\frac{(1+i)^n-1}{i}.
\]

Therefore,

\[
R=\frac{Si}{(1+i)^n-1}.
\]

For deposits at the beginning of each period, use the annuity-due accumulated value.

### Worked example

A fund must accumulate KSh 120,000 in 24 months. The effective monthly interest rate is 0.6%. The required end-of-month deposit is

\[
R=\frac{120,000(0.006)}{(1.006)^{24}-1}
=\boxed{\text{KSh }4,663.60\text{ per month}}.
\]

If the interest rate is zero, the deposit is simply S/n.

---

## 10. Continuous payment streams and force of interest

The supplied CT1 material introduces continuous net cashflow rates and accumulation under a force of interest. A continuous payment stream is represented by a rate \(\rho(t)\), rather than isolated payments.

For a time-dependent force of interest \(\delta(t)\), the accumulation factor from time t to time T is

\[
A(t,T)=\exp\left(\int_t^T\delta(u)\,du\right).
\]

The accumulated value at T of a continuous stream from a to b is

\[
AV(T)=\int_a^b\rho(t)
\exp\left(\int_t^T\delta(u)\,du\right)dt.
\]

The present value at time zero is

\[
PV(0)=\int_a^b\rho(t)
\exp\left(-\int_0^t\delta(u)\,du\right)dt.
\]

### Constant force and constant payment rate

If the force is constant δ and payments arrive continuously at rate ρ for n years, the accumulated value at time n is

\[
AV(n)=\rho\frac{e^{\delta n}-1}{\delta},
\]

provided δ is non-zero. If δ = 0, the accumulated value is ρn.

### Worked example

A continuous stream pays KSh 15,000 per year for 5 years. The force of interest is constant at 5% per annum.

\[
AV(5)=15,000\frac{e^{0.05(5)}-1}{0.05}
=\boxed{\text{KSh }85,207.63}.
\]

### Time-varying force

If \(\delta(t)\) changes with time, integrate the force over the relevant interval before exponentiating. For a piecewise force, split the integral at each change point. Do not replace a varying force with a simple arithmetic average unless the problem explicitly justifies that approximation.

---

## 11. Short-term investment returns

A short-term security may be purchased at a price below its redemption amount. The holding-period return is based on the actual purchase price and the amount received on redemption or sale.

\[
\text{Holding-period return}
=\frac{\text{Proceeds}-\text{Purchase price}}{\text{Purchase price}}.
\]

If the holding period is τ years and the investment grows from P to F, the equivalent effective annual rate is

\[
i_{\text{eff}}=\left(\frac FP\right)^{1/\tau}-1.
\]

A simple annualised return is a different measure and must be labelled as such. Follow the day-count and annualisation convention stated in the question.

This section is limited to elementary return calculations. It does not introduce the full CT1 syllabus on fixed-interest security pricing, redemption yields, tax, duration or immunisation.

---

## 12. Common examination errors

1. Using an annual rate with a monthly number of periods.
2. Treating a nominal rate as an effective rate.
3. Confusing an interest rate with a discount rate.
4. Using an annuity-immediate formula when payments are made in advance.
5. Counting the first payment at the wrong time.
6. Discounting a cashflow by the wrong number of periods.
7. Calculating loan interest on the original principal instead of the current outstanding balance.
8. Applying a new loan rate to periods before the rate changed.
9. Rounding intermediate values too early.
10. Giving a numerical answer without a unit, currency or stated rate basis.

## 13. A repeatable problem-solving method

For almost every question in this course pathway:

1. **Draw the timeline.** Mark time 0, payment dates and the focal date.
2. **Write the known quantities.** Principal, payment, rate, frequency, term and unknown.
3. **Standardise units.** Convert the rate and time to the same period.
4. **Choose the model.** Single sum, annuity, varying cashflows, loan, sinking fund or continuous stream.
5. **Write the formula before substitution.** This makes assumptions visible.
6. **Calculate with full intermediate precision.**
7. **Check reasonableness.** Present value should generally be below a future amount at a positive rate; a loan balance should reduce under a correctly sized repayment.
8. **State the answer clearly.** Include currency, time unit and rate convention.

---

## Reference alignment

The supplied CT1 pack supports the mathematical foundations used here, especially:

- CT1 Chapter 1: cashflow models and discrete/continuous net cashflows.
- CT1 Chapter 2: simple and compound accumulation, present values, discounting and equivalent rates.
- CT1 Chapter 3: effective and nominal rates and force of interest.
- CT1 Chapter 4: real and money interest rates.
- CT1 Chapter 5: discounting and accumulation of dated cashflows.
- CT1 Chapters 6–7: annuities and varying payment streams.
- CT1 Chapter 8: equations of value.
- CT1 Chapter 9: loan schedules and outstanding balances.

The chapter mapping identifies the source sections used as reference; it does not mean the complete CT1 chapter or every CT1 exercise belongs to SMA 2207. All examples and practice questions in this guide are original.
