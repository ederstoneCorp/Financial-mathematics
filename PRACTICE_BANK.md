# SMA 2207 Practice Bank

Original questions arranged from foundational to examination-style application. Unless stated otherwise, rates are effective and all payments occur at the end of each stated period. Retain full precision until the final answer.

## Level 1 — Foundations

### Question 1: Simple accumulation
KSh 48,000 is invested at 9% simple interest for 20 months. Find the accumulated amount.

**Solution**

Convert time to years: \(n=20/12\).

\[
A=48,000\left(1+0.09\times\frac{20}{12}\right)
=\boxed{\text{KSh }55,200}.
\]

### Question 2: Compound accumulation
KSh 65,000 is invested for 4 years at 7.5% effective annually. Find the accumulated amount and compound interest earned.

**Solution**

\[
A=65,000(1.075)^4=\text{KSh }86,711.59.
\]

Interest earned = 86,711.59 − 65,000 = **KSh 21,711.59**.

### Question 3: Present value
Find the present value of KSh 90,000 payable in 6 years at 8% effective annually.

**Solution**

\[
PV=90,000(1.08)^{-6}=\boxed{\text{KSh }56,701.55\text{ (approximately)}}.
\]

### Question 4: Simple discount
A bill with a face value of KSh 50,000 is due in 9 months. Find its present value under simple discount at 8% p.a.

**Solution**

\[
PV=50,000\left(1-0.08\times\frac{9}{12}\right)
=\boxed{\text{KSh }47,000}.
\]

## Level 2 — Rate conversion and valuation

### Question 5: Nominal to effective
A savings product quotes 10.8% nominal interest convertible monthly. Find the effective annual rate.

**Solution**

\[
i=\left(1+\frac{0.108}{12}\right)^{12}-1
=\boxed{11.3509\%\text{ (approximately)}}.
\]

### Question 6: Effective to nominal
Find the nominal annual rate convertible quarterly equivalent to 9% effective annually.

**Solution**

\[
j^{(4)}=4\left((1.09)^{1/4}-1\right)
=\boxed{8.708\%\text{ (approximately)}}.
\]

### Question 7: Interest to discount
Convert 7.5% effective annual interest into the equivalent effective annual discount rate.

**Solution**

\[
d=\frac{0.075}{1.075}
=\boxed{6.9767\%}.
\]

### Question 8: Real return
An account earns 12% effective annually while inflation is 8%. Calculate the exact real rate.

**Solution**

\[
i_r=\frac{1.12}{1.08}-1
=\boxed{3.7037\%}.
\]

### Question 9: Equation of value
A person owes KSh 18,000 in one year and KSh 25,000 in three years. The debts are replaced by one payment X at the end of year 3. If the effective annual interest rate is 6%, find X.

**Solution**

Accumulate the first debt for two years to the focal date:

\[
X=18,000(1.06)^2+25,000
=\boxed{\text{KSh }45,224.80}.
\]

## Level 3 — Annuities and sinking funds

### Question 10: Annuity-immediate present value
Find the present value of KSh 6,500 payable at each year-end for 8 years at 9% effective annually.

**Solution**

\[
PV=6,500\frac{1-(1.09)^{-8}}{0.09}
=\boxed{\text{KSh }41,700.15\text{ (approximately)}}.
\]

### Question 11: Annuity-due
A rent of KSh 18,000 is payable at the beginning of each month for 12 months. The effective monthly interest rate is 0.7%. Find the present value.

**Solution**

There are 12 payments, the first at time zero. Thus

\[
PV=18,000\left(1+0.007\right)
\frac{1-(1.007)^{-12}}{0.007}
=\boxed{\text{KSh }207,000\text{ (approximately)}}.
\]

### Question 12: Sinking fund
A business wants KSh 500,000 after 36 months. It deposits equal amounts at each month-end into an account earning 0.5% effective monthly. Find the monthly deposit.

**Solution**

\[
R=\frac{500,000(0.005)}{(1.005)^{36}-1}
=\boxed{\text{KSh }12,706.40\text{ (approximately)}}.
\]

### Question 13: Perpetuity
A fund pays KSh 24,000 at each year-end forever. Find its value at 8% effective annually.

**Solution**

\[
PV=\frac{24,000}{0.08}
=\boxed{\text{KSh }300,000}.
\]

## Level 4 — Loan schedules and changing rates

### Question 14: Monthly loan instalment
A loan of KSh 250,000 is repaid by 36 equal monthly instalments. The nominal annual rate is 15% convertible monthly. Calculate the instalment.

**Solution**

Monthly rate is \(0.15/12=0.0125\).

\[
R=\frac{250,000(0.0125)}{1-(1.0125)^{-36}}
=\boxed{\text{KSh }8,663.70\text{ (approximately)}}.
\]

### Question 15: Interest and capital portions
A loan has an opening balance of KSh 80,000 immediately before a monthly payment. The effective monthly rate is 1.2%, and the instalment is KSh 5,000. Find the interest and capital portions of the payment and the closing balance.

**Solution**

Interest = \(80,000(0.012)=\text{KSh }960\).

Capital repaid = 5,000 − 960 = **KSh 4,040**.

Closing balance = 80,000 − 4,040 = **KSh 75,960**.

### Question 16: New rate after a fixed period
A loan of KSh 120,000 is repaid by 24 equal monthly payments at 1% effective monthly. Immediately after the 12th payment, the rate changes to 1.2% effective monthly. Find the revised payment for the remaining 12 months.

**Solution**

First calculate the original instalment:

\[
R=\frac{120,000(0.01)}{1-(1.01)^{-24}}.
\]

Balance immediately after payment 12:

\[
L_{12}=R\frac{1-(1.01)^{-12}}{0.01}.
\]

The new instalment is then

\[
R_{new}=\frac{L_{12}(0.012)}{1-(1.012)^{-12}}.
\]

Substitution gives a revised monthly payment of approximately **KSh 5,720.45**. Keep the unrounded original instalment and balance in the calculation.

## Level 5 — Force of interest and continuous payments

### Question 17: Force of interest
Find the force of interest equivalent to 8.5% effective annually.

**Solution**

\[
\delta=\ln(1.085)=\boxed{8.1587\%\text{ (approximately)}}.
\]

### Question 18: Continuous payment stream
A continuous stream pays KSh 20,000 per year for 4 years. The force of interest is constant at 6% p.a. Find the accumulated value at the end of year 4.

**Solution**

\[
AV(4)=20,000\frac{e^{0.06(4)}-1}{0.06}
=\boxed{\text{KSh }88,030.\text{ (approximately)}}.
\]

### Question 19: Varying force
The force of interest is \(\delta(t)=0.04+0.01t\) for \(0\leq t\leq 3\). Find the accumulation factor from time 0 to time 3.

**Solution**

\[
A(0,3)=\exp\left(\int_0^3(0.04+0.01t)dt\right)
=\exp(0.12+0.045)
=\boxed{e^{0.165}\approx1.1794}.
\]

### Question 20: Continuous cashflow with varying force
A continuous payment stream arrives at rate \(\rho(t)=2,000\) KSh per year for \(0\leq t\leq2\). The force of interest is constant at 5% p.a. Find the accumulated value at time 2.

**Solution**

\[
AV(2)=\int_0^2 2,000e^{0.05(2-t)}dt
=2,000\frac{e^{0.1}-1}{0.05}
=\boxed{\text{KSh }4,206.80\text{ (approximately)}}.
\]

---

## Final self-assessment

Before considering a question complete, check that you can:

- identify the cashflow dates and signs;
- distinguish simple, compound, nominal, effective and discount rates;
- convert rates to the payment period;
- derive and apply annuity-immediate and annuity-due values;
- form an equation of value at a stated focal date;
- build a loan schedule and calculate an outstanding balance;
- reset a loan instalment after a rate change;
- use the force of interest in discrete and continuous models.

**Important:** These are original practice questions designed around the filtered working topic scope. They are not reproduced JKUAT examination questions and do not establish the lecturer's official examinability decisions.
