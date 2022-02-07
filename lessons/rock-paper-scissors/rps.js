/* ====================================================
   Variables
   ==================================================== */
const readline = require("readline-sync");
const VALID_CHOICES = [
  "rock (r)",
  "paper (p)",
  "scissors (s)",
  "lizard (l)",
  "spock (k)",
];
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

/* Lib
/* ==================================================== */

function incrementWins(winner) {
  wins[winner] += 1;
  prompt(`Total Score: You: ${wins.player}; Computer: ${wins.computer}\n`);
  if (wins.player === 3) {
    prompt(`You are the tournament winner!! 🥳🥳🥳 \n`);
  }
  if (wins.computer === 3) {
    prompt(`Sorry, the computer is the tournament winner!! 😢😢😢 \n`);
  }
}

function displayWinner(choice, computerChoice) {
  let winner;
  if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "rock" && computerChoice === "lizard") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "paper" && computerChoice === "spock") ||
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "scissors" && computerChoice === "lizard") ||
    (choice === "lizard" && computerChoice === "paper") ||
    (choice === "lizard" && computerChoice === "spock") ||
    (choice === "spock" && computerChoice === "rock") ||
    (choice === "spock" && computerChoice === "scissors")
  ) {
    prompt("You win! 🥳\n");
    winner = "player";
  } else if (
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "rock" && computerChoice === "spock") ||
    (choice === "paper" && computerChoice === "lizard") ||
    (choice === "paper" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "spock") ||
    (choice === "lizard" && computerChoice === "scissors") ||
    (choice === "lizard" && computerChoice === "rock") ||
    (choice === "spock" && computerChoice === "paper") ||
    (choice === "spock" && computerChoice === "lizard")
  ) {
    prompt("Computer wins! 😢\n");
    winner = "computer";
  } else {
    prompt("It's a tie! 👔\n");
  }
  incrementWins(winner);
}

/* ====================================================
   Inits and Event Listeners
   ==================================================== */

while (true) {
  let choice = readline.keyIn(`\nChoose one: ${VALID_CHOICES.join(", ")}.\n`, {
    limit: "rpslk",
  });

  switch (choice) {
    case "r":
      choice = "rock";
      break;
    case "p":
      choice = "paper";
      break;
    case "s":
      choice = "scissors";
      break;
    case "l":
      choice = "lizard";
      break;
    case "k":
      choice = "spock";
      break;
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoiceLong = VALID_CHOICES[randomIndex];
  let computerChoice = computerChoiceLong
    .toString()
    .substring(0, computerChoiceLong.length - 4);

  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  displayWinner(choice, computerChoice);

  const playAgain = readline.keyInYNStrict("Would you like to play again?");
  if (!playAgain) break;
}

prompt(`\nThanks for playing - bye! 👋`);
