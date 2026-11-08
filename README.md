# SMA 2207 Financial Mathematics I

A browser-based interactive textbook and calculation laboratory for the JKUAT SMA 2207 learning pathway.

## Run locally

This is a static site. Open `index.html` in a browser, or serve the repository root with any static file server.

For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Current features

- Responsive course dashboard and module navigation
- Nine structured learning modules with original explanations and formulas
- Interactive calculators for simple interest, compound accumulation/present value, nominal-to-effective conversion, annuities, loan amortisation, annual-coupon bond valuation and straight-line depreciation
- Loan repayment schedule with monthly interest, principal and outstanding balance
- Formula reference, learning pathway, local progress tracking and an eight-question knowledge check
- Kenyan shilling examples and financial contexts

## Academic scope and source handling

The supplied 800-page PDF is an ActEd CT1 Combined Materials Pack for the 2013 examinations. It is not a JKUAT SMA 2207 course outline. The platform therefore uses the previously discussed SMA 2207 working topic scope as its organising structure and selectively consults relevant CT1 material for explanations and mathematical foundations.

The current working core includes cashflow models, time value of money, interest and discount rates, real and money rates, discounting and accumulation, annuities, equations of value, and loan repayment. Bonds, project appraisal and depreciation are labelled as applied or scope-dependent content pending confirmation against the lecturer's official coverage.

The platform does not reproduce the ActEd pack or its question bank. Explanations, examples, quizzes and calculator implementations are original. Do not treat supplementary topics as examinable solely because they appear in the CT1 pack.

## Technical notes

- No build step or package installation is required.
- The interface is implemented in plain HTML, CSS and JavaScript.
- Progress and the latest quiz score are stored in browser local storage.
- The current calculators use stated assumptions. In particular, the bond calculator is an annual-coupon model; the loan calculator assumes monthly repayments and a nominal annual rate convertible monthly.
- Charting and additional visual simulations can be added in subsequent iterations.

## Next development priorities

1. Reconcile the working module list with the official JKUAT course outline and lecturer's teaching sequence.
2. Expand each module with more worked examples, derivations, visual timelines and targeted exercises.
3. Add interactive cashflow timelines, annuity visualisations and growth charts.
4. Add more comprehensive practice sets and timed assessment modes.
5. Validate every numerical example and calculator against independently calculated test cases.
