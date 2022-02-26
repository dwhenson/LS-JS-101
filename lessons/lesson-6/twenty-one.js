function initializeDeck() {
  let deck = [];
  let cardsInSuit = 13;
  let suits = 4;

  for (let card = 1; card < cardsInSuit; card++) {
    if (card <= 10) {
      let counter = 1;
      while (counter <= suits) {
        deck.push(card);
        counter += 1;
      }
    }
    if (card > 10) {
      let counter = 1;
      while (counter <= suits) {
        deck.push(10);
        counter += 1;
      }
    }
  }
  return deck;
}

initializeDeck(); //?
