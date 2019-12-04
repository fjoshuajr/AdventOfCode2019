function solver(wire1, wire2) {
  const centralPort = { x: 0, y: 0 };

  const wire1Points = getPoints(centralPort, wire1);
  const wire2Points = getPoints(centralPort, wire2);

  const allIntersections = [...wire1Points]
    .map(p => p[0]) // we only care about the point coordinates here
    .filter(coordinates => {
      return wire2Points.has(coordinates);
    });

  const steps = getMinimumSteps(allIntersections, wire1Points, wire2Points);

  return steps;
}

function getMinimumSteps(allIntersections, wire1Points, wire2Points) {
  let minSteps = 0;
  allIntersections.forEach(coordinates => {
    let totalSteps =
      wire1Points.get(coordinates) + wire2Points.get(coordinates);
    if (minSteps == 0 || minSteps > totalSteps) {
      minSteps = totalSteps;
    }
  });
  return minSteps;
}

function getPoints(centralPort, wire) {
  const points = new Map();
  let xPointer = centralPort.x;
  let yPointer = centralPort.y;
  let wireSteps = 0;

  while (wire.length) {
    let { direction, value } = parseMovement(wire.shift());
    
    for (let i = 0; i < value; i++) {
      let point;

      if (direction == "U") yPointer++;
      if (direction == "D") yPointer--;
      if (direction == "R") xPointer++;
      if (direction == "L") xPointer--;

      wireSteps++;
      point = `${xPointer},${yPointer}`;

      // exclude origin and same wire crossings, ie. no duplicates
      if (point !== "0,0" && !points.has(point)) {
        points.set(point, wireSteps);
      }
    }
  }

  return points;
}

function parseMovement(movement) {
  return { direction: movement.slice(0, 1), value: Number(movement.slice(1)) };
}

module.exports = { solver };
