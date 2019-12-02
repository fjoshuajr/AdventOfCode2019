const fs = require("fs");
const { solver } = require("./solver");

function main() {
  const inputs = JSON.parse(`[${fs.readFileSync("./input.txt").toString()}]`);

  inputs[1] = 12;
  inputs[2] = 2;

  const result = solver(inputs);

  console.log(result[0]);
}

main();
