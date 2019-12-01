function solver(value) {
  let result = value / 3;
  result = Math.floor(result);
  result = result - 2;
  return result;
}

module.exports = solver;
