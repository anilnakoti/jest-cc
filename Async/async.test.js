const fetchUser = require("./async");

// promises
test("fetch user data and id should be 1", () => {
  expect.assertions(1);
  return fetchUser(1).then((data) => expect(data.id).toEqual(1));
});

// async and await
test("fetch user data", async () => {
  expect.assertions(1);
  const user = await fetchUser(1);
  expect(user.id).toBe(1);
});
