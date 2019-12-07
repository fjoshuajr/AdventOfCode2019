function solver(orbits) {
  let objectsInOrbit = new Map();
  for (let i = 0; i < orbits.length; i++) {
    let orbit = orbits[i];
    let [obj1, obj2] = orbit.split(")");

    if (!objectsInOrbit.has(obj2)) {
      objectsInOrbit.set(obj2, { orbitCounter: 1, parent: [obj1] });
    }
  }

  let objects = [...objectsInOrbit].map(objectInOrbit => {
    let [name, info] = objectInOrbit;
    let { orbitCounter, parent } = info;

    let currentParent = parent[0];
    let parentInfo = objectsInOrbit.get(currentParent);
    while (currentParent !== "COM") {
      parentInfo = objectsInOrbit.get(currentParent);
      currentParent = parentInfo.parent[0];

      orbitCounter++;
      parent = [...parent, currentParent];
    }

    return { name, orbitCounter, parent };
  });

  let total = objects.reduce((acc, obj) => acc + obj.orbitCounter, 0);

  return total;
}

module.exports = solver;
