const OPCODE_SUM = 1;
const OPCODE_MULTIPLICATION = 2;
const OPCODE_INPUT = 3;
const OPCODE_OUTPUT = 4;
const OPCODE_HALT = 99;

function solver(program) {
  const input = 1;

  let instructionSize;
  for (let i = 0; program[i] != OPCODE_HALT; i += instructionSize) {
    let { opcode, modes } = decodeModesAndOpcode(program[i]);

    if (opcode == OPCODE_SUM || opcode == OPCODE_MULTIPLICATION) {
      instructionSize = 4;
      let instructionParams = peekNParams(i, program, instructionSize);
      let [inputParam1, inputParam2, outputParam] = instructionParams;

      if (modes[0] === 0) inputParam1 = program[inputParam1];
      if (modes[1] === 0) inputParam2 = program[inputParam2];

      if (opcode === OPCODE_SUM) {
        program[outputParam] = inputParam1 + inputParam2;
      } else if (opcode === OPCODE_MULTIPLICATION) {
        program[outputParam] = inputParam1 * inputParam2;
      }
    } else if (opcode == OPCODE_INPUT || opcode == OPCODE_OUTPUT) {
      instructionSize = 2;
      let instructionParams = peekNParams(i, program, instructionSize);
      let [param] = instructionParams;

      if (opcode === OPCODE_INPUT) {
        program[param] = input;
      } else if (opcode === OPCODE_OUTPUT) {
        console.log(program[param]);
      }
    }
  }

  return program;
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
