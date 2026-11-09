const { test, expect } = require('@playwright/test');

test('a booking that does not exist gives 404', async ({ request }) => {

  // Ask for a booking number that does not exist
  const url = 'https://restful-booker.herokuapp.com/booking/99999999';
  const response = await request.get(url, {
    headers: { Accept: 'application/json' }
  });

  // Check: the answer should be 404 (Not Found)
  expect(response.status()).toBe(404);
});
