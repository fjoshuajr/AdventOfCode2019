const fs = require("fs");
const { solver } = require("./solver");

function main() {
  const inputs = JSON.parse(`[${fs.readFileSync("./input.txt").toString()}]`);

  solver(5, inputs);
}

main();
