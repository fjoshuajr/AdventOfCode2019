function solver(wire1, wire2) {
  const centralPort = { x: 0, y: 0 };

  const wire1Points = getPoints(centralPort, wire1);
  const wire2Points = getPoints(centralPort, wire2);

  const allIntersections = [...wire1Points].filter(point => {
    return wire2Points.has(point);
  });

  const distance = getClosestIntersection(allIntersections, centralPort);

  return distance;
}

function getClosestIntersection(allIntersections, centralPort) {
  let closestDistance = null;
  allIntersections.forEach(point => {
    let [x, y] = point.split(",");
    let pointDistance = calculateDistance(x, y, centralPort.x, centralPort.y);
    if (closestDistance == null || pointDistance < closestDistance) {
      closestDistance = pointDistance;
    }
  });
  return closestDistance;
}

function calculateDistance(x, y, originX, originY) {
  return Math.abs(x - originX) + (y - originY);
}

function getPoints(centralPort, wire) {
  const points = new Set();
  let xPointer = centralPort.x;
  let yPointer = centralPort.y;

  while (wire.length) {
    let { direction, value } = parseMovement(wire.shift());

    for (let i = 0; i < value; i++) {
      let point;

      if (direction == "U") yPointer++;
      if (direction == "D") yPointer--;
      if (direction == "R") xPointer++;
      if (direction == "L") xPointer--;

      point = `${xPointer},${yPointer}`;

      // to exclude origin and same wire crossings, ie. no duplicates
      if (point !== "0,0" || !points.has(point)) {
        points.add(point);
      }
    }
  }

  return points;
}

function parseMovement(movement) {
  return { direction: movement.slice(0, 1), value: Number(movement.slice(1)) };
}

module.exports = { solver, calculateDistance };
