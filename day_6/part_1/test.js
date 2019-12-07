const solver = require("./solver");

describe("part 1", () => {
  it(`COM)AAA`, () => {
    expect(solver(['COM)AAA'])).toEqual(1);
  });

  it(`test case`, () => {
    expect(solver(['COM)A', 'A)B'])).toEqual(3);
    expect(solver(['A)B', 'COM)A'])).toEqual(3);
  });

  it(`medium orbits`, () => {
    expect(
      solver(['COM)B','B)C','C)D','D)E','E)F','B)G','G)H','D)I','E)J','J)K','K)L'])
    ).toEqual(42);

    expect(
      solver(['B)C','C)D','D)E','E)F','B)G','G)H','D)I','E)J','J)K','K)L','COM)B'])
    ).toEqual(42);
  });
});
