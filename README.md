# SMA 2207 Financial Mathematics I

A full-stack, responsive learning platform for JKUAT SMA 2207, built using the architecture pattern established in EderStone Corp's Eugine's Biology learning platform.

## Architecture

- **Frontend:** React 19, TypeScript and Vite.
- **API:** Node.js and Express 5.
- **Database:** PostgreSQL, provisioned through the Render Blueprint.
- **Authentication:** email/password accounts, bcrypt password hashing, signed JWT sessions and role-based administrator access.
- **Persistence:** learner progress is stored locally for immediate use and synchronised to PostgreSQL when authenticated.
- **Deployment:** Render Node web service serves the Vite production build and API from one origin.
- **CI:** GitHub Actions runs the TypeScript/Vite production build on pushes and pull requests.

## Learner features

- Personal learner accounts and sign-in.
- Dashboard with module completion, points, streak, assessment history and learning activity.
- Eight course modules mapped to the supplied 200-question bank.
- Module overview, key formulas and access to the complete study guide.
- Untimed topic-focused practice. Learners choose a module, navigate its questions, reveal solutions and flag questions for revision.
- RAT and CAT self-marked assessment workflows, with question selection and saved result history.
- Revision centre for flagged questions.
- Formula library.
- Seven calculation models plus discounting: simple interest, compound accumulation, nominal/effective conversion, annuity PV, monthly loan instalment, sinking-fund deposit, continuous payment stream and compound discounting.
- Floating calculator that remains available while studying.
- Visual laboratory with compound-growth comparison and a cashflow timeline.
- Analytics for assessment performance and printable reports.
- Calendar and study-task planner.
- Points, streaks and achievement milestones.
- Dark/light appearance settings.
- Subscription request workflow.

## Administrator foundations

- Separate administrator sign-in using the ADMIN_PASSWORD environment variable.
- Learner account list and high-level learner/assessment/subscription-request counts.
- Ability to activate or deactivate learner subscription access.

## Run locally

Requirements: Node.js 20 or later and PostgreSQL.

```bash
npm install
npm run dev
```

The Vite development server runs the frontend. For API-backed local testing, set the environment variables below and run the API separately:

```bash
npm run server
```

## Environment variables

| Variable | Purpose |
|---|---|
| DATABASE_URL | PostgreSQL connection string |
| JWT_SECRET | Secret used to sign learner and administrator sessions |
| ADMIN_PASSWORD | Administrator password; set a strong unique value in Render |
| CLIENT_ORIGIN | Optional comma-separated list of allowed browser origins |
| NODE_ENV | Set to production on Render |

Do not commit real secrets or database credentials.

## Render deployment

The root render.yaml defines a Node web service and a PostgreSQL database. Review the Blueprint in Render before applying it. The first deployment requires Render to provision the database and configure the secret environment variables. The web service health check is /api/health.

The Blueprint does not imply that a service or database has already been provisioned. Check the Render dashboard after syncing the Blueprint.

## Question-bank and academic scope

The practice bank contains 200 supplied questions arranged as eight modules of 25. It is a revision resource, not a verified official JKUAT examination blueprint. The supplementary actuarial topics in Module 8 and some bond topics should be checked against the lecturer's official coverage.

The supplied answer key has been reviewed for selected mathematical and terminology issues. Continue validating numerical answers and conventions before using the bank as a formal marking scheme. The complete question data is in question-bank.js; the audit is in MASTER_BANK_AUDIT.md.

The original single-page laboratory has been retained at legacy-lab.html during the architecture migration. It can be removed after the React implementation has been fully checked against the previous calculators, learning content and visualisations.

## Current implementation boundaries

- The learner progress API persists the platform's current progress object. The frontend keeps a local copy for resilience.
- RAT/CAT are currently self-marked study assessments, not institutionally scheduled or automatically graded examinations.
- Subscription requests and administrator access toggles are present; payment processing, email verification, password-reset email delivery and automated subscription-key fulfilment still require provider configuration and additional implementation.
- The platform build has not yet been verified on the live Render service.
