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

    objectsInOrbit.set(name, { orbitCounter, parent });

    return { name, orbitCounter, parent };
  });

  const youParents = objectsInOrbit.get("YOU")["parent"];
  const sanParents = objectsInOrbit.get("SAN")["parent"];

  let minimumTransfers = -1;
  for (let i = 0; i < youParents.length; i++) {
    for (let j = 0; j < sanParents.length; j++) {
      if (sanParents[j] === youParents[i]) {
        minimumTransfers = i + j;
        return minimumTransfers;
      }
    }
  }

  return minimumTransfers;
}

module.exports = solver;
