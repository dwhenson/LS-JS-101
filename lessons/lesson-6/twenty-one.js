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

function dealCards() {
  hands = {};
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
  initializeDeck();
  dealCards();

  console.log(`You hold ${hands.player[0]} and a ${hands.player[1]}.`);
  console.log(`The dealer holds a ${hands.dealer[0]} and an unknown card.`);

  // Repeat game?
  prompt("Play again?");
  let answer = READLINE.question().toLowerCase()[0];
  if (answer !== "y") break;
}

prompt("Thanks for playing.");
