const { solver, decodeModesAndOpcode } = require("./solver");

describe("part 1", () => {
  it("decodeModesAndOpcode", () => {
    expect(decodeModesAndOpcode(1101)).toEqual({ modes: [1, 1, 0], opcode: 1 });
    expect(decodeModesAndOpcode(3)).toEqual({ modes: [0, 0, 0], opcode: 3 });
    expect(decodeModesAndOpcode(11002)).toEqual({
      modes: [0, 1, 1],
      opcode: 2
    });
  });

  it("1002,4,3,4,33 becomes 1002,4,3,4,99", () => {
    expect(solver([1002, 4, 3, 4, 33])).toEqual([1002, 4, 3, 4, 99]);
  });
});
