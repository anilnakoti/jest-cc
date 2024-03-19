const matchers = require("./matchers");

// Common matchers
describe("text examples", () => {
  // toBe
  it("should add 5 plus 3 to be 8", () => {
    const result = matchers.add(5, 3);
    expect(result).toBe(8);
  });

  // toEqual
  it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("truthy or falsy", () => {
  // test null
  it("null", () => {
    const result = matchers.isNull();
    expect(result).toBeNull();
    expect(result).toBeDefined();
    expect(result).toBeFalsy();
    expect(result).not.toBeUndefined();
    expect(result).not.toBeTruthy();
  });

  // test undefined
  it("undefined", () => {
    const result = matchers.isUndefined();
    expect(result).toBeUndefined();
    expect(result).toBeFalsy();
    expect(result).not.toBeNull();
    expect(result).not.toBeDefined();
    expect(result).not.toBeTruthy();
  });

  // test zero
  it("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  // toBeFalsy
  it("isNull", () => {
    const result = matchers.isNull();
    expect(result).toBeFalsy();
    expect(result).not.toBeTruthy();
  });
});

// test numbers
describe("numbers", () => {
  // numbers
  it("Five plus Three", () => {
    const value = 5 + 3;
    expect(value).toBeGreaterThan(7);
    expect(value).toBeGreaterThanOrEqual(8);
    expect(value).toBeLessThan(10);
    expect(value).toBeLessThanOrEqual(10);
    expect(value).toBeCloseTo(7.9999999);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(8);
    expect(value).toEqual(8);
  });

  // test floating
  it("adding floating point numbers", () => {
    const value = 0.1 + 0.4;
    expect(value).toBe(0.5);
    expect(value).toBeCloseTo(0.49999999);
  });
});

// test strings
describe("strings", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  it("but there is a 'stop' in Christoph", () => {
    expect("Christoph").toMatch(/stop/);
  });
});

// test Arrays
describe("arrays", () => {
  it("the shopping list has milk on it", () => {
    const myList = ["diapers", "kleenex", "trash bags", "paper towels", "milk"];
    expect(myList).toContain("milk");
    expect(new Set(myList)).toContain("milk");
  });
});

// test exceptions

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("exception", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});
