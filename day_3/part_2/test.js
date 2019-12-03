const { solver } = require("./solver");

describe("part 2", () => {
  it("R8,U5,L5,D3 vs U7,R6,D4,L4 takes 30 steps", () => {
    expect(solver(["R8", "U5", "L5", "D3"], ["U7", "R6", "D4", "L4"])).toEqual(
      30
    );
  });

  it("R75,D30,R83,U83,L12,D49,R71,U7,L72 vs U62,R66,U55,R34,D71,R55,D58,R83 takes 610 steps", () => {
    expect(
      solver(
        ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"],
        ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"]
      )
    ).toEqual(610);
  });

  it("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51 vs U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 takes 410 steps", () => {
    expect(
      solver(
        [
          "R98",
          "U47",
          "R26",
          "D63",
          "R33",
          "U87",
          "L62",
          "D20",
          "R33",
          "U53",
          "R51"
        ],
        ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"]
      )
    ).toEqual(410);
  });
});
