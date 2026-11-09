const { test, expect } = require('@playwright/test');

test('make a booking, delete it, and check it is gone', async ({ request }) => {
  const url = 'https://restful-booker.herokuapp.com';
  const headers = { Accept: 'application/json' };

  // 1. Log in and get a token (the key card)
  const login = await request.post(url + '/auth', {
    headers: headers,
    data: { username: 'admin', password: 'password123' }
  });
  expect(login.status()).toBe(200);
  const token = (await login.json()).token;

  // 2. Make a new booking and remember its number
  const create = await request.post(url + '/booking', {
    headers: headers,
    data: {
      firstname: 'Shakil', lastname: 'Tester', totalprice: 150, depositpaid: true,
      bookingdates: { checkin: '2026-12-01', checkout: '2026-12-05' }
    }
  });
  expect(create.status()).toBe(200);
  const id = (await create.json()).bookingid;

  // 3. Delete the booking. Show the token (key card) to be allowed.
  const remove = await request.delete(url + '/booking/' + id, {
    headers: { Cookie: 'token=' + token }
  });
  expect(remove.status()).toBe(201);

  // 4. Look for the booking again. It should be gone (404).
  const check = await request.get(url + '/booking/' + id, { headers: headers });
  expect(check.status()).toBe(404);
});