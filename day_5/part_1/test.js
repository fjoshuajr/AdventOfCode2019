const { solver, decodeModesAndOpcode } = require("./solver");

describe("part 1", () => {
  jest.spyOn(global.console, "log");

  it("decodeModesAndOpcode", () => {
    expect(decodeModesAndOpcode(1101)).toEqual({ modes: [1, 1, 0], opcode: 1 });
    expect(decodeModesAndOpcode(3)).toEqual({ modes: [0, 0, 0], opcode: 3 });
    expect(decodeModesAndOpcode(11002)).toEqual({
      modes: [0, 1, 1],
      opcode: 2
    });
  });

  it("runs diagnostics", () => {
    solver(1, [3, 0, 4, 0, 99]);
    expect(console.log).toHaveBeenLastCalledWith(1);

    solver(2, [3, 0, 4, 0, 99]);
    expect(console.log).toHaveBeenLastCalledWith(2);
  });
});
