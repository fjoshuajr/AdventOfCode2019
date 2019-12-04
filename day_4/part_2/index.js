const { solver } = require("./solver");

function main() {
  const minValue = 152085;
  const maxValue = 670283;

  const total = solver(minValue, maxValue);

  console.log(total);
}

main();
