# SMA 2207 Master Examination Bank — Academic Audit

## How this bank should be used
The supplied 200-question set is a broad revision inventory, not a verified JKUAT examination blueprint. Its eight-module structure is useful for organising revision, but it mixes foundational financial mathematics with advanced actuarial and investment topics. The platform therefore treats it as a master reference bank and separates likely core material from supplementary material.
The current working SMA 2207 scope is based on previously discussed course topics and publicly indexed JKUAT past-paper styles. It is not a verbatim official departmental outline. Confirm the final examinable boundary against the lecturer's current outline.

## Scope classification
| Supplied bank module | Questions | Treatment in the platform |
|---|---:|---|
| 1. Cashflow models and financial transactions | 1–25 | Core foundations. NPV, IRR and contingent cashflows require qualification; full project appraisal and life-contingent modelling are not assumed core. |
| 2. Time value and interest models | 26–50 | Core. Accumulation functions, simple/compound interest, discount and variable rates. |
| 3. Nominal, effective and force of interest | 51–75 | Core. Rate conversion, force of interest and accumulation under variable force. |
| 4. Discounting, present values and equations of value | 76–100 | Core. Inflation/real-rate material is supporting pending lecturer confirmation; discounted payback is not assumed core. |
| 5. Annuities-certain | 101–125 | Core. Immediate, due, deferred, perpetuity, payable m-thly and continuous annuities. Increasing/decreasing annuities are extension topics unless confirmed. |
| 6. Loan repayment and amortisation | 126–150 | Core. Level payments, interest/principal split, outstanding balances and rate changes. Refinancing penalties are contextual rather than mathematical core. |
| 7. Sinking funds and bonds | 151–175 | Sinking funds are core/strongly relevant. Full bond pricing, Makeham, duration, convexity and immunisation are supplementary unless the lecturer confirms them. Treasury-bill return calculations are relevant where reflected in past-paper questions. |
| 8. Depreciation and miscellaneous actuarial mathematics | 176–200 | Depreciation is supplementary. Portfolio yield, immunisation, stochastic rates, mortality, life assurance, premiums, reserves and Thiele's equation are advanced actuarial extensions, not assumed SMA 2207 core. |

## Corrections and cautions identified
The answer key must be checked before any item is used for automatic marking. The following issues are material:
1. Q16 — one sign change in a conventional cashflow sequence can establish at most one positive IRR under the usual polynomial conditions; it does not guarantee that a positive IRR exists. State existence separately.
2. Q86 — from 100v + 100v² = 180, the positive root is v = (-1 + √8.2)/2 ≈ 0.93178. The supplied answer 0.923 is inaccurate.
3. Q131 — C_t = P v^(n-t+1) is valid for a level-payment loan under the stated periodic-rate and end-of-period-payment convention. It is not general for variable instalments.
4. Q132–133 — immediately after payment t, the prospective balance is the PV of the remaining n-t payments; immediately before that payment, the count differs. State the valuation instant explicitly.
5. Q149–150 — the recurrences for capital repayments and interest components depend on the timing convention and on C_t denoting principal repaid at the end of period t. Keep definitions beside the formulas.
6. Q162 — in common market usage, a clean or flat bond price excludes accrued coupon interest, while a dirty/full price includes it. The supplied answer appears to reverse this convention.
7. Q165 — the displayed Makeham expression is not safely stated. Under a level-coupon bond convention with redemption C, coupon rate g per period and yield i per period, a standard rearrangement is P = Cg/i + C(1 - g/i)v^n. Define units and coupon timing.
8. Q170 — D_mod = D_mac/(1+i) applies to annual effective yield with annual cashflow periods. For other coupon frequencies, the denominator must reflect yield per coupon period and duration units.
9. Q173 — discount-yield and investment-yield conventions for Treasury bills are different. The two displayed pricing forms are not interchangeable without defining quoted yield basis and day-count convention. Use the convention specified in the question or by CBK.
10. Q182 — the sinking-fund depreciation description and formula need a clearly defined accounting convention. Do not treat it as interchangeable with straight-line or reducing-balance depreciation.
11. Q195 — use a consistent life-annuity symbol such as ä_x, and define survival probability and payment timing. This is life-contingencies material, not ordinary annuity-certain material.
12. Q36–37 — year-3 effective rate is obtained from A(3)/A(2)-1. Ensure the accumulation function is positive and non-decreasing over the interval; monotonicity alone is not a complete set of regularity assumptions.

## Editorial and mathematical rules
- Keep each question's original module and number as a traceable reference.
- Store the supplied answer separately from the reviewed answer; never silently overwrite a disputed key.
- For numerical questions, show formula, substitution, intermediate values and rounded final answer.
- State whether rates are effective, nominal, discount or force rates, and specify conversion frequency.
- State whether payments occur at the beginning, end or continuously.
- State the focal date for every equation-of-value problem.
- For loan balances, state whether the balance is measured immediately before or after an instalment.
- Use short-answer and worked-calculation formats where appropriate. Do not force every question into multiple choice.
- Label supplementary actuarial content clearly so it does not displace the main SMA 2207 revision path.
- Do not describe this bank as an official JKUAT paper or lecturer-issued question bank.

## Recommended assessment design
1. Topic practice: select one of the eight master-bank modules (25 questions each), with unlimited time and answer reveal.
2. Mixed revision: draw a balanced set across core modules, including conceptual and computational items.
3. Untimed mixed revision: draw a balanced set across modules, with optional self-marking and worked solutions.
4. Review mode: show learner response, reviewed answer, working, topic tag and explanation.
5. Progress analytics: report marks by topic, calculation versus concept performance, and recurring errors.
6. Supplementary mode: make bond, depreciation and actuarial extension questions available separately.

The 200-question bank is now integrated into the untimed practice interface as eight selectable modules of 25 questions each. Learners reveal the answer/solution after attempting each item; the floating calculator remains available. This interface does not impose a timer or auto-submit. The question bank is a revision resource, not a verified official JKUAT examination blueprint. Numerical answers and convention-dependent items should continue to be reviewed before being treated as authoritative marking keys.