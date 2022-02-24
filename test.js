const HUMAN_MARKER = "X";
const WINNING_LINES = [
  [1, 1, 3],
  [4, "X", 1],
  [7, "X", "X"],
  [1, 8, 1],
];

let square;
for (let index = 0; index < WINNING_LINES.length; index++) {
  if (line.filter((square) => square === HUMAN_MARKER).length === 2) {
    square = line.find((line) => line !== HUMAN_MARKER);
    break;
  } else {
    console.log(9);
  }
}

square;
