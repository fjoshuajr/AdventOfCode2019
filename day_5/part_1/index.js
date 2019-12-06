const fs = require("fs");
const { solver } = require("./solver");

function main() {
  const inputs = JSON.parse(`[${fs.readFileSync("./input.txt").toString()}]`);

  solver(inputs);
}

main();
