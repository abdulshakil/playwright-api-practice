// Bring in Playwright's testing tools
const { test, expect } = require('@playwright/test');

// This is our test. The name is in the quotes.
test('the hotel can show all bookings', async ({ request }) => {

  // 1. Ask the API: "Show me all bookings"
  const response = await request.get('https://restful-booker.herokuapp.com/booking', {
    headers: { Accept: 'application/json' }
  });

  // 2. Check: the answer number should be 200 (OK)
  expect(response.status()).toBe(200);

  // 3. Print the answer on the screen so we can see it
  const data = await response.json();
  console.log(data);
});
