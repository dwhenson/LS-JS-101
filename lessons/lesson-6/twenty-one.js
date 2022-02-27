/* ====================================================
   Variables
   ==================================================== */
const READLINE = require("readline-sync");
let CARDS_IN_SUIT = 14;
let SUITS = 4;
let deck = [];
let hands = {};

/* ====================================================
   Functions
   ==================================================== */

/* Helpers
/* ==================================================== */

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

/* App
/* ==================================================== */

function calculateWinner() {
  if (calculateScore("player") > calculateScore("dealer")) {
    prompt("The player wins\n".toUpperCase());
    return true;
  } else {
    prompt("The dealer wins\n".toUpperCase());
    return true;
  }
}

function checkBust(competitor) {
  let score = calculateScore(competitor);
  if (score > 21) {
    return true;
  } else {
    return false;
  }
}

function calculateScore(competitor) {
  let array = hands[competitor];
  let score = array.reduce((acc, cur) => (acc += Number(cur)), 0);
  if (score > 21) {
    if (array.includes(11)) {
      array.splice(
        array.findIndex((number) => number === 11),
        1,
        1
      );
      prompt(`${competitor} score is over 21, converting 11 to 1.`);
    }
    return score;
  }
  return score;
}

function addCard(competitor) {
  hands[competitor].push(deck.shift());
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
   Inits and Event Listeners
   ==================================================== */

while (true) {
  console.clear();
  // Set up and welcome
  initializeDeck();
  dealCards();

  prompt(
    `Player holds ${hands.player[0]} and a ${hands.player[1]}; Total;: ${calculateScore(
      "player"
    )}.`
  );
  prompt(`The dealer holds a ${hands.dealer[0]} and an unknown card.\n`);

  // Player turn
  while (true) {
    prompt("Would you like another card? (y/n)");
    let answer = READLINE.question().toLowerCase()[0];
    if (answer !== "y") {
      console.clear();
      prompt(`Player chose to stick at ${calculateScore("player")}\n`);
      break;
    }

    addCard("player");
    calculateScore("player");

    if (checkBust("player")) {
      prompt(`Player added a ${hands.player[hands.player.length - 1]}`);
      prompt(
        `Player current hand is ${hands.player}; Total: ${calculateScore("player")}.\n`
      );
      prompt("The dealer wins\n".toUpperCase());
      break;
    } else {
      prompt(`Player added a ${hands.player[hands.player.length - 1]}`);
      prompt(
        `Player current hand is ${hands.player}; Total: ${calculateScore("player")}.\n`
      );
    }
  }

  // Dealer turn
  if (!checkBust("player")) {
    prompt(
      `Dealer holds ${hands.dealer[0]} and a ${hands.dealer[1]}; Total ${calculateScore(
        "dealer"
      )}.`
    );
    while (true) {
      while (calculateScore("dealer") < 17) {
        addCard("dealer");
        prompt(
          `Dealer added a ${
            hands.dealer[hands.dealer.length - 1]
          }; Total ${calculateScore("dealer")}.`
        );
        calculateScore("dealer");
      }
      if (checkBust("dealer")) {
        prompt("The player wins\n".toUpperCase());
        break;
      } else {
        prompt(`Dealer sticks at ${calculateScore("dealer")}.\n`);
        calculateWinner();
        break;
      }
    }
  }

  // Repeat game?
  prompt("Play again? (y/n)");
  let answer = READLINE.question().toLowerCase()[0];
  if (answer !== "y") break;
}

prompt("Thanks for playing.");
console.clear();
