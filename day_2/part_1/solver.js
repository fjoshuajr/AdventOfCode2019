const OPCODE_SUM = 1;
const OPCODE_MULTIPLICATION = 2;
const OPCODE_HALT = 99;

function solver(program) {
  for (let i = 0; program[i] != OPCODE_HALT; i += 4) {
    const instruction = peek4Elements(i, program);
    const [opcode, inputPos1, inputPos2, outputPos] = instruction;
    if (opcode === OPCODE_SUM) {
      program[outputPos] = program[inputPos1] + program[inputPos2];
    } else if (opcode === OPCODE_MULTIPLICATION) {
      program[outputPos] = program[inputPos1] * program[inputPos2];
    }
  }
  return program;
}

function peek4Elements(initialPosition, array) {
  return array.slice(initialPosition, initialPosition + 4);
}

module.exports = { solver, peek4Elements };
