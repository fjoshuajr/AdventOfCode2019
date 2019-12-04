function solver(minValue, maxValue) {
  const differentPasswords = [];
  for (let password = minValue; password <= maxValue; password++) {
    if (isValid(password)) {
      differentPasswords.push(password);
    }
  }
  return differentPasswords.length;
}

function isValid(password) {
  const passwordArray = password
    .toString()
    .split("")
    .map(value => parseInt(value));

  let counts = passwordArray.reduce((counter, number) => {
    counter[number] = ++counter[number] || 1;
    return counter;
  }, {});

  if (passwordArray.length === 6) {
    if (
      passwordArray[0] <= passwordArray[1] &&
      passwordArray[1] <= passwordArray[2] &&
      passwordArray[2] <= passwordArray[3] &&
      passwordArray[3] <= passwordArray[4] &&
      passwordArray[4] <= passwordArray[5]
    ) {
      let thereAreAdjacents = false;
      Object.keys(counts).forEach(number => {
        if (counts[number] >= 2) {
          thereAreAdjacents = true;
        }
      });
      return thereAreAdjacents;
    }
  }

  return false;
}

module.exports = { solver, isValid };
