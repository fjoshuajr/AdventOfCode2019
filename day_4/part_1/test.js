const { isValid } = require("./solver");

describe("part 1", () => {
  it("validation criteria", () => {
    expect(isValid(111111)).toBe(true);
    expect(isValid(122345)).toBe(true);
    expect(isValid(223450)).toBe(false);
    expect(isValid(123789)).toBe(false);
  });
});
