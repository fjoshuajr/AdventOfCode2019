const fs = require("fs");
const solver = require("./solver");

function main() {
  const inputs = fs.readFileSync("./input.txt").toString().split("\r\n");

  const result = solver(inputs);

  console.log(result);
}

main();
