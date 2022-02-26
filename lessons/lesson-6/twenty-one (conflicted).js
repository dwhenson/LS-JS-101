function initializeDeck() {
  let deck = [];
  let cardsInSuit = 13;
  let suit = 4;
  for (let card = 1; card < cardsInSuit; card++) {
    if (card < 11) {
      for (let number = 1; card <= suit; number++) {
        deck.push(number);
    }
  }
}
