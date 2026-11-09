
API tests using Playwright and JavaScript
# Playwright API Practice

API tests written in **Playwright** with **JavaScript**, testing the Restful Booker practice API.

## What the tests cover

| Test file | What it checks |
|---|---|
| api-1-get.spec.js | **GET**: shows all bookings and checks the status is 200 |
| api-2-create.spec.js | **POST**: creates a booking and checks the saved name and price |
| api-3-not-found.spec.js | **Negative test**: asks for a booking that does not exist and checks for 404 |
| api-4-full-story.spec.js | **End-to-end**: logs in for a token, creates a booking, deletes it, and confirms it is gone |

## Findings

- Creating a booking returns **200** instead of the standard **201 Created**
- Deleting a booking returns **201** instead of the usual **200** or **204**

## How to run

```bash
npm install
npx playwright install
npx playwright test --project=chromium --reporter=list
```

**Author:** Abdul Kaiyum Shakil, Test Analyst
