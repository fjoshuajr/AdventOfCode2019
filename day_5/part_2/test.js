const { solver, decodeModesAndOpcode } = require("./solver");

describe("part 2", () => {
  jest.spyOn(global.console, "log");

  it("3,9,8,9,10,9,4,9,99,-1,8, consider whether the input is equal to 8", () => {
    solver(2, [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8]);
    expect(console.log).toHaveBeenLastCalledWith(0);

    solver(8, [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8]);
    expect(console.log).toHaveBeenLastCalledWith(1);

    solver(10, [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8]);
    expect(console.log).toHaveBeenLastCalledWith(0);
  });

  it("3,9,7,9,10,9,4,9,99,-1,8, consider whether the input is less than 8", () => {
    solver(2, [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8]);
    expect(console.log).toHaveBeenLastCalledWith(1);

    solver(8, [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8]);
    expect(console.log).toHaveBeenLastCalledWith(0);

    solver(10, [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8]);
    expect(console.log).toHaveBeenLastCalledWith(0);
  });

  it("3,3,1108,-1,8,3,4,3,99, consider whether the input is equal to 8", () => {
    solver(2, [3, 3, 1108, -1, 8, 3, 4, 3, 99]);
    expect(console.log).toHaveBeenLastCalledWith(0);

    solver(8, [3, 3, 1108, -1, 8, 3, 4, 3, 99]);
    expect(console.log).toHaveBeenLastCalledWith(1);

    solver(10, [3, 3, 1108, -1, 8, 3, 4, 3, 99]);
    expect(console.log).toHaveBeenLastCalledWith(0);
  });

  it("3,3,1107,-1,8,3,4,3,99, consider whether the input is less than 8", () => {
    solver(2, [3, 3, 1107, -1, 8, 3, 4, 3, 99]);
    expect(console.log).toHaveBeenLastCalledWith(1);

    solver(8, [3, 3, 1107, -1, 8, 3, 4, 3, 99]);
    expect(console.log).toHaveBeenLastCalledWith(0);

    solver(10, [3, 3, 1107, -1, 8, 3, 4, 3, 99]);
    expect(console.log).toHaveBeenLastCalledWith(0);
  });

  it("3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9; output 0 if the input was zero or 1 if the input was non-zero", () => {
    solver(0, [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9]);
    expect(console.log).toHaveBeenLastCalledWith(0);

    solver(2, [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9]);
    expect(console.log).toHaveBeenLastCalledWith(1);
  });

  it("3,3,1105,-1,9,1101,0,0,12,4,12,99,1; output 0 if the input was zero or 1 if the input was non-zero", () => {
    solver(0, [3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1]);
    expect(console.log).toHaveBeenLastCalledWith(0);

    solver(2, [3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1]);
    expect(console.log).toHaveBeenLastCalledWith(1);
  });

  it(`larger program; 
      output 999 if the input value is below 8, 
      output 1000 if the input value is equal to 8, or 
      output 1001 if the input value is greater than 8`, () => {
    solver(2, [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
      1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
      999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]);
    expect(console.log).toHaveBeenLastCalledWith(999);

    solver(8, [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
      1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
      999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]);
    expect(console.log).toHaveBeenLastCalledWith(1000);

    solver(10, [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
      1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
      999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]);
    expect(console.log).toHaveBeenLastCalledWith(1001);
  });
});
