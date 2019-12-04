function solver(minValue, maxValue) {
  let countPasswords = 0;
  for (let password = minValue; password <= maxValue; password++) {
    if (isValid(password)) {
      countPasswords++;
    }
  }
  return countPasswords;
}

function isValid(password) {
  const passwordArray = password
    .toString()
    .split("")
    .map(value => parseInt(value));

  if (passwordArray.length === 6) {
    if (
      passwordArray[0] <= passwordArray[1] &&
      passwordArray[1] <= passwordArray[2] &&
      passwordArray[2] <= passwordArray[3] &&
      passwordArray[3] <= passwordArray[4] &&
      passwordArray[4] <= passwordArray[5]
    ) {
      let counts = passwordArray.reduce((counter, number) => {
        counter[number] = ++counter[number] || 1;
        return counter;
      }, {});

      let adjacentsComeInPairs = true;
      Object.keys(counts).forEach(number => {
        if (counts[number] % 2 != 0) {
          adjacentsComeInPairs = false;
        }
      });
      return adjacentsComeInPairs;
    }
  }

  return false;
}

module.exports = { solver, isValid };
