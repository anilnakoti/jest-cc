let animals = [];

beforeEach(() => {
  animals = ["elephant", "bear", "zebra", "tiger"];
});

describe("animals array", () => {
  beforeEach(() => {
    animals = ["elephant", "bear", "zebra", "tiger"];
  });
  
  it("should add animal to end of array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });

  it("should add animal to beginning of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have array length 4", () => {
    expect(animals.length).toBe(4);
  });
});

it.only("truthy statement", () => {
  expect(true).toBe(true);
});
