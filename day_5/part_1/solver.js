const OPCODE_SUM = 1;
const OPCODE_MULTIPLICATION = 2;
const OPCODE_INPUT = 3;
const OPCODE_OUTPUT = 4;
const OPCODE_HALT = 99;

function solver(input, program) {
  let instructionSize;
  for (let i = 0; program[i] != OPCODE_HALT; i += instructionSize) {
    let { opcode, modes } = decodeModesAndOpcode(program[i]);

    if (opcode == OPCODE_SUM || opcode == OPCODE_MULTIPLICATION) {
      instructionSize = 4;
      let instructionParams = peekNParams(i, program, instructionSize);
      let [param1, param2, param3] = instructionParams;

      if (modes[0] == 0) param1 = program[param1];
      if (modes[1] == 0) param2 = program[param2];

      if (opcode == OPCODE_SUM) {
        program[param3] = param1 + param2;
      } else if (opcode == OPCODE_MULTIPLICATION) {
        program[param3] = param1 * param2;
      }
    } else if (opcode == OPCODE_INPUT || opcode == OPCODE_OUTPUT) {
      instructionSize = 2;
      let instructionParams = peekNParams(i, program, instructionSize);
      let [param] = instructionParams;

      if (opcode == OPCODE_INPUT) {
        program[param] = input;
      } else if (opcode == OPCODE_OUTPUT) {
        if (modes[0] == 0) param = program[param];

        console.log(param);
      }
    }
  }
}

function decodeModesAndOpcode(modesAndOpcode) {
  const nr = modesAndOpcode.toString().split("");
  const opcode = Number(nr[nr.length - 1]);
  const modes = [
    Number(typeof nr[nr.length - 3] === "undefined" ? 0 : nr[nr.length - 3]),
    Number(typeof nr[nr.length - 4] === "undefined" ? 0 : nr[nr.length - 4]),
    Number(typeof nr[nr.length - 5] === "undefined" ? 0 : nr[nr.length - 5])
  ];
  return { modes, opcode };
}

function peekNParams(startPosition, array, positions) {
  return array.slice(startPosition + 1, startPosition + positions);
}

module.exports = { solver, decodeModesAndOpcode };