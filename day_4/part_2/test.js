const { isValid } = require("./solver");

describe("part 2", () => {
  it("validation criteria", () => {
    expect(isValid(112233)).toBe(true);
    expect(isValid(123444)).toBe(false);
    expect(isValid(111122)).toBe(true);
  });
});
