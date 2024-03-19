const fetchUser = require("../Async/async");

const forEach = (items, callback) => {
  for (i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

test("mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);

  expect(mockCallback.mock.calls[0][0]).toBe(0);

  expect(mockCallback.mock.calls[1][0]).toBe(1);

  expect(mockCallback.mock.results[0].value).toBe(42);

  expect(mockCallback.mock.results[1].value).toBe(43);
});

it("mock return", () => {
  const mock = jest.fn();

  mock
    .mockReturnValueOnce("default")
    .mockReturnValueOnce("first call")
    .mockReturnValueOnce("second call");

  const result = mock();
  const result1 = mock();
  const result2 = mock();

  expect(result).toBe("default");
  expect(result1).toBe("first call");
  expect(result1).toMatch(/first/);
  expect(result2).toBe("second call");
  expect(result2).toMatch(/second/);
});
