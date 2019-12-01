const solver = require("./solver");

describe("part 2", () => {
  it("The fuel required by a module of mass 14 and its fuel is 2", () => {
    expect(solver(14)).toBe(2);
  });

  it("The fuel required by a module of mass 1969 and its fuel is 966", () => {
    expect(solver(1969)).toBe(966);
  });

  it("The fuel required by a module of mass 100756 and its fuel is 50346", () => {
    expect(solver(100756)).toBe(50346);
  });
});
