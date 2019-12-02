const fs = require("fs");
const { solver } = require("./solver");

function main() {
  const inputs = JSON.parse(`[${fs.readFileSync("./input.txt").toString()}]`);

  const result = solver(inputs);

  console.log(result);
}

main();
