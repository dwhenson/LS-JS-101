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
    console.log("The player wins");
    return true;
  } else {
    console.log("The player wins");
    return true;
  }
}

function checkBust(competitor) {
  let score = calculateScore(competitor);
  console.log(`${competitor} total score is ${score}`);
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
    }
    score = array.reduce((acc, cur) => (acc += Number(cur)), 0);
    return score;
  }
  return score;
}

function addCard(competitor) {
  hands[competitor].push(deck.shift());
  console.log(`${competitor} added a ${hands[competitor][hands[competitor].length - 1]}`);
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
  // Set up and welcome
  initializeDeck();
  dealCards();

  console.log(
    `Player holds ${hands.player[0]} and a ${hands.player[1]} (total of ${calculateScore(
      "player"
    )}).`
  );
  console.log(`The dealer holds a ${hands.dealer[0]} and an unknown card.`);

  // Player turn
  while (true) {
    prompt("Would you like another card? (y/n)");
    let answer = READLINE.question().toLowerCase()[0];
    if (answer !== "y") {
      console.log(`You chose to stick at ${calculateScore("player")}`);
      break;
    }

    addCard("player");
    calculateScore("player");

    if (checkBust("player")) {
      console.log(`Sorry, the player looses!`);
      break;
    } else {
      console.log(`Player current hand is ${hands.player}`);
    }
  }

  // Dealer turn
  if (!checkBust("player")) {
    while (true) {
      console.log(
        `Dealer holds ${hands.dealer[0]} and a ${
          hands.dealer[1]
        } (total of ${calculateScore("dealer")})`
      );
      while (calculateScore("dealer") < 17) {
        addCard("dealer");
        calculateScore("dealer");
        if (checkBust("dealer")) {
          console.log(`The dealer looses!`);
          break;
        } else {
          console.log(`Dealer current hand is ${hands.dealer}`);
        }
      }
      calculateWinner();
      break;
    }
  }

  // Repeat game?
  prompt("Play again? (y/n)");
  let answer = READLINE.question().toLowerCase()[0];
  if (answer !== "y") break;
}

prompt("Thanks for playing.");
