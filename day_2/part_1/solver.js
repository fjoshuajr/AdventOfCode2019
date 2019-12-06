const O_SUM = 1;
const O_MULTIPLICATION = 2;
const O_HALT = 99;

function solver(program) {
  for (let i = 0; program[i] != O_HALT; i += 4) {
    const instruction = peek4Elements(i, program);
    const [opcode, inputPos1, inputPos2, outputPos] = instruction;
    if (opcode === O_SUM) {
      program[outputPos] = program[inputPos1] + program[inputPos2];
    } else if (opcode === O_MULTIPLICATION) {
      program[outputPos] = program[inputPos1] * program[inputPos2];
    }
  }
  return program;
}

function peek4Elements(initialPosition, array) {
  return array.slice(initialPosition, initialPosition + 4);
}

module.exports = { solver, peek4Elements };
