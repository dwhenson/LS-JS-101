/* ====================================================
   Variables
   ==================================================== */
const READLINE = require("readline-sync");
const VALID_CHOICES = [
  "rock (r)",
  "paper (p)",
  "scissors (s)",
  "lizard (l)",
  "spock (k)",
];
const KEY_TO_CHOICE = {
  r: "rock",
  p: "paper",
  s: "scissors",
  l: "lizard",
  k: "spock",
};
const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};
const firstToNumber = 3;
const wins = {
  player: 0,
  computer: 0,
};

/* ====================================================
   Functions
   ==================================================== */

/* Helpers
/* ==================================================== */

function prompt(message) {
  console.log(`=> ${message}`);
}

function resetScore() {
  wins.computer = 0;
  wins.player = 0;
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

/* Lib
/* ==================================================== */

function displayScore() {
  prompt(`Total Score: You: ${wins.player}; Computer: ${wins.computer}\n`);
  if (wins.player === firstToNumber) {
    prompt(`You are the tournament winner!! \n`);
    resetScore();
  }
  if (wins.computer === firstToNumber) {
    prompt(`Sorry, the computer is the tournament winner!! \n`);
    resetScore();
  }
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt("You win!\n");
    wins.player += 1;
  } else if (choice === computerChoice) {
    prompt("It's a tie!\n");
  } else {
    prompt("Computer wins!\n");
    wins.computer += 1;
  }
}

/* ====================================================
   Inits
   ==================================================== */
console.clear();
prompt(
  "Let's play rock, paper, scissors, lizard, spock!\n=> First to three wins the match!"
);
while (true) {
  let responseKey = READLINE.keyIn(`\nChoose one: ${VALID_CHOICES.join(", ")}.\n`, {
    limit: "rpslk",
  });
  // Convert key choice to corresponding word
  const choice = KEY_TO_CHOICE[responseKey.toLowerCase()];

  // Generate computer choice, and remove key hint from string
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex].substring(
    0,
    VALID_CHOICES[randomIndex].length - 4
  );
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  displayWinner(choice, computerChoice);

  displayScore();

  const playAgain = READLINE.keyInYNStrict("Would you like to play again?");
  console.clear();
  if (!playAgain) break;
}

prompt(`Thanks for playing!`);
