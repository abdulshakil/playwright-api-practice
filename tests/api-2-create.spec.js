const { test, expect } = require('@playwright/test');

test('I can make a new booking', async ({ request }) => {

  // 1. Send the new booking to the API (POST = make a new one)
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    headers: { Accept: 'application/json' },
    data: {
      firstname: 'Shakil',
      lastname: 'Tester',
      totalprice: 150,
      depositpaid: true,
      bookingdates: { checkin: '2026-12-01', checkout: '2026-12-05' },
      additionalneeds: 'Breakfast'
    }
  });

  // 2. Check: did it work?
  expect(response.status()).toBe(200);

  // 3. Check: did the hotel save the right name and price?
  const data = await response.json();
  console.log(data);
  expect(data.booking.firstname).toBe('Shakil');
  expect(data.booking.totalprice).toBe(150);
});