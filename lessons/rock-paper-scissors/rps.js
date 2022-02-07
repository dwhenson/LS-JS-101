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

/* Lib
/* ==================================================== */

function incrementWins(winner) {
  wins[winner] += 1;
  prompt(`Total Score: You: ${wins.player}; Computer: ${wins.computer}\n`);
  if (wins.player === 3) {
    prompt(`You are the tournament winner!! 🥳🥳🥳 \n`);
    resetScore();
  }
  if (wins.computer === 3) {
    prompt(`Sorry, the computer is the tournament winner!! 😢😢😢 \n`);
    resetScore();
  }
}

function playerWins(choice, computerChoice) {
  return (
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
  );
}

function displayWinner(choice, computerChoice) {
  let winner;
  if (playerWins(choice, computerChoice)) {
    prompt("You win! 🥳\n");
    winner = "player";
  } else if (choice === computerChoice) {
    prompt("It's a tie! 👔\n");
  } else {
    prompt("Computer wins! 😢\n");
    winner = "computer";
  }
  incrementWins(winner);
}

/* ====================================================
   Inits
   ==================================================== */

while (true) {
  let choice = READLINE.keyIn(`\nChoose one: ${VALID_CHOICES.join(", ")}.\n`, {
    limit: "rpslk",
  });
  // Convert key choice to corresponding word
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

  // Generate computer choice, and remove key hint from string
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoiceLong = VALID_CHOICES[randomIndex];
  let computerChoice = computerChoiceLong
    .toString()
    .substring(0, computerChoiceLong.length - 4);
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  // Calculate the winner
  displayWinner(choice, computerChoice);

  const playAgain = READLINE.keyInYNStrict("Would you like to play again?");
  if (!playAgain) break;
}

prompt(`Thanks for playing - bye! 👋`);
