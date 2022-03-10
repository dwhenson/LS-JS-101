/* ====================================================
   Variables
   ==================================================== */
const READLINE = require("readline-sync");
const CARDS_IN_SUIT = 14;
const SUITS = 4;
const MAX = 21;
const MAX_TOTAL = 5;
const DEALER_MIN = 17;
let deck = [];
let hands = {};
let totalScore = {
  player: 0,
  dealer: 0,
};

/* ====================================================
   Functions
   ==================================================== */

/* Helpers
/* ==================================================== */

function formatList(array) {
  let copy = [...array];
  let lastItem = `and ${copy[copy.length - 1]}`; //?
  copy.splice(copy.length - 1, 1, lastItem);
  return copy.join(", ");
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* Lib
/* ==================================================== */

function calculateOverallWinner() {
  if (totalScore.dealer >= MAX_TOTAL) {
    prompt("The dealer wins the tournament\n".toUpperCase());
    totalScore = {
      player: 0,
      dealer: 0,
    };
  }
  if (totalScore.player >= MAX_TOTAL) {
    prompt("The player wins the tournament\n".toUpperCase());
    totalScore = {
      player: 0,
      dealer: 0,
    };
  }
}

function calculateWinner() {
  if (calculateScore("dealer") > calculateScore("player")) {
    return "dealer";
  } else if (calculateScore("dealer") < calculateScore("player")) {
    return "player";
  } else {
    return "tie";
  }
}

function checkBust(competitor) {
  let score = calculateScore(competitor);
  if (score > MAX) {
    return true;
  } else {
    return false;
  }
}

function addCard(competitor) {
  hands[competitor].push(deck.shift());
}

function calculateScore(competitor) {
  let array = hands[competitor];
  let score = array.reduce((acc, cur) => (acc += Number(cur)), 0);
  if (score > MAX) {
    if (array.includes(11)) {
      array.splice(
        array.findIndex((number) => number === 11),
        1,
        1
      );
      score = array.reduce((acc, cur) => (acc += Number(cur)), 0);
      prompt(`The new card takes the ${competitor}'s score over ${MAX}!`);
      prompt(`Converting the ${competitor}'s 11 to a 1.`);
      // Recursive check for multiple aces
      return calculateScore(competitor);
    }
    return score;
  }
  return score;
}

function checkInitialAces() {
  // If two aces in initial hand convert one immediately
  if (hands.player[0] === 11 && hands.player[1] === 11) {
    hands.player[1] = 1;
  }
  if (hands.dealer[0] === 11 && hands.dealer[1] === 11) {
    hands.dealer[1] = 1;
  }
}

function dealCards() {
  hands = {
    player: [],
    dealer: [],
  };
  hands.player = deck.splice(0, 2);
  hands.dealer = deck.splice(0, 2);
}

function initializeDeck() {
  deck = [];
  for (let card = 2; card < CARDS_IN_SUIT; card++) {
    if (card <= 11) {
      for (let counter = 1; counter <= SUITS; counter++) {
        deck.push(card);
      }
    }
    if (card > 11) {
      for (let counter = 1; counter <= SUITS; counter++) {
        deck.push(10);
      }
    }
  }
  shuffle(deck);
  return deck;
}

/* ====================================================
   Inits
   ==================================================== */

while (true) {
  // Set up
  console.clear();
  initializeDeck();
  dealCards();

  // Set score variables
  let playerTotal = calculateScore("player");
  let dealerTotal = calculateScore("dealer");

  checkInitialAces();

  prompt(`Player holds ${hands.player[0]} and a ${hands.player[1]}.`);
  prompt(`The dealer holds a ${hands.dealer[0]} and an unknown card.\n`);

  // Player turn
  prompt(`Player hand is ${playerTotal} in total.`);
  while (true) {
    prompt("Would you like another card? (y/n)");
    let answer = READLINE.question().toLowerCase();

    while (true) {
      if (["y", "n", "yes", "no"].includes(answer)) {
        break;
      } else {
        prompt("Sorry, please chose either 'yes (y)' or 'no (n)'.");
        answer = READLINE.question().toLowerCase();
      }
    }

    if (answer === "n" || answer === "N") {
      console.clear();
      playerTotal = calculateScore("player");
      prompt(`Player chose to stick at ${playerTotal}\n`);
      break;
    }

    addCard("player");

    if (checkBust("player")) {
      playerTotal = calculateScore("player");
      prompt(`Player added a ${hands.player[hands.player.length - 1]}.`);
      prompt(`Player current hand is ${formatList(hands.player)}.`);
      prompt(`Player hand is ${playerTotal} in total.\n`);
      prompt("Player bust!! The dealer wins.\n".toUpperCase());
      totalScore.dealer += 1;
      prompt(
        `Score: Dealer ${totalScore.dealer}; Player: ${totalScore.player}.\n`
      );
      break;
    } else {
      playerTotal = calculateScore("player");
      prompt(`Player added a ${hands.player[hands.player.length - 1]}`);
      prompt(`Player current hand is ${formatList(hands.player)}.`);
      prompt(`Player hand is ${playerTotal} in total.\n`);
    }
  }

  // Dealer turn
  if (!checkBust("player")) {
    prompt(`Dealer holds ${hands.dealer[0]} and a ${hands.dealer[1]}.\n`);

    while (true) {
      while (calculateScore("dealer") < DEALER_MIN) {
        addCard("dealer");
        dealerTotal = calculateScore("dealer");
        prompt(`Dealer added a ${hands.dealer[hands.dealer.length - 1]}.`);
        prompt(`Dealer current hand is ${formatList(hands.dealer)}.`);
        prompt(`Dealer hand is ${dealerTotal} in total.\n`);
      }

      if (checkBust("dealer")) {
        prompt("The dealer bust!! The player wins.\n".toUpperCase());
        totalScore.player += 1;
        prompt(
          `Score: Dealer ${totalScore.dealer}; Player: ${totalScore.player}.\n`
        );
        break;
      } else {
        prompt(`Dealer sticks at ${dealerTotal}.\n`);
      }

      if (calculateWinner() === "dealer") {
        prompt("The dealer wins\n".toUpperCase());
        totalScore.dealer += 1;
      } else if (calculateWinner() === "player") {
        prompt("The player wins\n".toUpperCase());
        totalScore.player += 1;
      } else {
        prompt("It's a tie!\n".toUpperCase());
      }
      prompt(
        `Score: Dealer ${totalScore.dealer}; Player: ${totalScore.player}.\n`
      );
      break;
    }
  }

  calculateOverallWinner();

  // Check continue playing
  prompt("Play again?");
  let answer = READLINE.question().toLowerCase();

  while (true) {
    if (["y", "n", "yes", "no"].includes(answer)) {
      break;
    } else {
      prompt("Sorry, please chose either 'yes (y)' or 'n0 (n)'.");
      answer = READLINE.question().toLowerCase();
    }
  }

  if (answer === "n" || answer === "no") prompt("Thanks for playing!");
  if (answer === "n" || answer === "no") break;
}
