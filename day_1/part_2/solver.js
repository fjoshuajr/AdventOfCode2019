function solver(initialValue) {
  let fuel = initialValue;
  let totalFuel = 0;
  while (fuel > 0) {
    fuel = calculateFuel(fuel);

    if (fuel < 0) fuel = 0;

    totalFuel += fuel;
  }
  return totalFuel;
}

function calculateFuel(mass) {
  let fuel = mass / 3;
  fuel = Math.floor(fuel);
  fuel = fuel - 2;
  return fuel;
}

module.exports = solver;
