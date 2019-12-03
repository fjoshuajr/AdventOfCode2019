const fs = require("fs");
const { solver } = require("./solver");

function main() {
  const wires = fs
    .readFileSync("./input.txt")
    .toString()
    .split("\n");

  const wire1 = wires[0].split(",");
  const wire2 = wires[1].split(",");

  const distance = solver(wire1, wire2);

  console.log(distance);
}

main();
