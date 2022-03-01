/* ====================================================
   Variables
   ==================================================== */
const readline = require("readline-sync");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const MAX_TOTAL = 5;
const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let totalScore = {
  player: 0,
  computer: 0,
};

/* ====================================================
   Functions
   ==================================================== */

/* Helpers
/* ==================================================== */

function joinOr(array, delimiter = ", ", junction = "or") {
  if (array.length <= 1) return String(array);
  if (array.length === 2) return array.join(` ${junction} `);
  array.splice(array.length - 1, 1, `${junction} ${array[array.length - 1]}`);
  return array.join(delimiter);
}
function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === " ");
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

/* Lib
/* ==================================================== */

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function computerChoosesSquare(board) {
  let square;

  // Offense first
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  // Defense second
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  // Else choose middle square if available
  if (!square) {
    if (board[5] === INITIAL_MARKER) {
      square = 5;
    }
  }

  //  Otherwise pick a random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map((square) => board[square]);

  if (markersInLine.filter((val) => val === marker).length === 2) {
    let unusedSquare = line.find((square) => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "player") playerChoosesSquare(board);
  if (currentPlayer === "computer") computerChoosesSquare(board);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

/* ====================================================
   Inits
   ==================================================== */

while (true) {
  // Set up
  console.clear();
  let board = initializeBoard();
  let goesFirst;
  let goesSecond;

  // Choose who goes first
  while (true) {
    prompt("Who should go first? (player or computer)");
    goesFirst = readline.question().toLowerCase().trim();
    goesSecond = goesFirst === "player" ? "computer" : "player";
    if (["player", "computer"].includes(goesFirst)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  // Play the game
  let currentPlayer = goesFirst;
  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = currentPlayer === goesFirst ? goesSecond : goesFirst;
    if (someoneWon(board) || boardFull(board)) break;
  }

  // Display winner and update score
  if (someoneWon(board)) {
    displayBoard(board);
    prompt(`${detectWinner(board)} won!`);

    totalScore[detectWinner(board).toLowerCase()] += 1;
    prompt(`Total scores: player: ${totalScore.player}; computer ${totalScore.computer}`);
  } else {
    prompt("It's a tie!");
  }

  // Check total score
  if (totalScore.player >= MAX_TOTAL) {
    prompt("The player wins the tournament\n".toUpperCase());
  }
  if (totalScore.computer >= MAX_TOTAL) {
    prompt("The computer wins the tournament\n".toUpperCase());
  }

  // Check continue playing
  prompt("Play again?");
  let answer = readline.question().trim().toLowerCase()[0];

  while (true) {
    if (["y", "Y", "n", "N"].includes(answer)) {
      break;
    } else {
      prompt("Sorry, please chose either 'y' or 'n'.");
      answer = readline.question().trim().toLowerCase()[0];
    }
  }

  if (answer === "n") prompt("Thanks for playing Tic Tac Toe!");
  if (answer === "n") break;
}
