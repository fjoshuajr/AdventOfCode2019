const fs = require("fs");
const solver = require("./solver");

function main() {
  const inputs = fs
    .readFileSync("./input.txt")
    .toString()
    .split("\n");

  // We can use the reduce function to make the total...
  const total = inputs.reduce(
    (accumulator, currentValue) => accumulator + solver(currentValue),
    0
  );

  // or with a forEach...
  /*
    const total = 0;
    inputs.forEach(currentValue => {
      total += solver(currentValue);
    });
  */

  console.log(total);
}

main();
