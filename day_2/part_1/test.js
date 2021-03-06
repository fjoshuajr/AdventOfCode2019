const {solver, peek4Elements} = require("./solver");

describe("part 1", () => {
  it("peek4Elements", () => {
    expect(peek4Elements(0, [1,1,1,4,1,5,6,0,99])).toEqual([1,1,1,4]);
    expect(peek4Elements(2, [1,1,1,4,1,5,6,0,99])).toEqual([1,4,1,5]);
    expect(peek4Elements(4, [1,1,1,4,1,5,6,0,99])).toEqual([1,5,6,0]);
  });

  it("1,0,0,0,99 becomes 2,0,0,0,99", () => {
    expect(solver([1,0,0,0,99])).toEqual([2,0,0,0,99]);
  });
  
  it("2,3,0,3,99 becomes 2,3,0,6,99", () => {
    expect(solver([2,3,0,3,99])).toEqual([2,3,0,6,99]);
  });

  it("2,4,4,5,99,0 becomes 2,4,4,5,99,9801", () => {
    expect(solver([2,4,4,5,99,0])).toEqual([2,4,4,5,99,9801]);
  });

  it("1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99", () => {
    expect(solver([1,1,1,4,1,5,6,0,99])).toEqual([30,1,1,4,2,5,6,0,99]);
  });
});
