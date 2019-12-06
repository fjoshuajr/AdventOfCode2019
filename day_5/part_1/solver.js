const O_SUM = 1;
const O_MULTIPLICATION = 2;
const O_INPUT = 3;
const O_OUTPUT = 4;
const O_HALT = 99;

function solver(input, program) {
  let instructionSize;
  for (let i = 0; program[i] != O_HALT; i += instructionSize) {
    let { opcode, modes } = decodeModesAndOpcode(program[i]);

    if (opcode == O_SUM || opcode == O_MULTIPLICATION) {
      instructionSize = 4;
      let instructionParams = peekNParams(i, program, instructionSize);
      let [param1, param2, param3] = instructionParams;

      if (modes[0] == 0) param1 = program[param1];
      if (modes[1] == 0) param2 = program[param2];

      if (opcode == O_SUM) {
        program[param3] = param1 + param2;
      } else if (opcode == O_MULTIPLICATION) {
        program[param3] = param1 * param2;
      }
    } else if (opcode == O_INPUT || opcode == O_OUTPUT) {
      instructionSize = 2;
      let instructionParams = peekNParams(i, program, instructionSize);
      let [param] = instructionParams;

      if (opcode == O_INPUT) {
        program[param] = input;
      } else if (opcode == O_OUTPUT) {
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
