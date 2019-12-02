function solver(initialMass) {
  let fuel = initialMass;
  let totalFuel = 0;
  while (fuel > 0) {
    fuel = calculateFuel(fuel);

    if (fuel < 0) fuel = 0;

    totalFuel += fuel;
  }
  return totalFuel;
}

function calculateFuel(mass) {
  return Math.floor(mass / 3) - 2;
}

module.exports = solver;
