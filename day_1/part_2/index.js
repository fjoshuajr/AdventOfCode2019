const fs = require("fs");
const solver = require("./solver");

function main() {
  const inputs = fs
    .readFileSync("./input.txt")
    .toString()
    .split("\n");

  const total = inputs.reduce(
    (accumulator, currentValue) => accumulator + solver(currentValue),
    0
  );

  console.log(total);
}

main();
