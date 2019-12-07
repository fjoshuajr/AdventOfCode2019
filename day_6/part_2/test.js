const solver = require("./solver");

describe("part 2", () => {
  it(`medium orbits`, () => {
    expect(
      solver([
        "COM)B",
        "B)C",
        "C)D",
        "D)E",
        "E)F",
        "B)G",
        "G)H",
        "D)I",
        "E)J",
        "J)K",
        "K)L",
        "K)YOU",
        "I)SAN"
      ])
    ).toEqual(4);
  });
});
