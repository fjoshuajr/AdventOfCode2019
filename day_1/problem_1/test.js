const solver = require("./solver");

describe("problem 1", () => {
  it("For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2", () => {
    expect(solver(12)).toBe(2);
  });
  
  it("For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2", () => {
    expect(solver(14)).toBe(2);
  });

  it("For a mass of 1969, the fuel required is 654", () => {
    expect(solver(1969)).toBe(654);
  });

  it("For a mass of 100756, the fuel required is 33583", () => {
    expect(solver(100756)).toBe(33583);
  });
});
