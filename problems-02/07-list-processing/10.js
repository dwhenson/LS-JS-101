function transactionsFor(identifier, list) {
  return list.filter((item) => item.id === identifier);
}

function isItemAvailable(identifier, list) {
  if (transactionsFor(identifier, list) < 1) return false;

  let total = transactionsFor(identifier, list).reduce((acc, cur) => {
    if (cur.movement === "in") {
      return acc + cur.quantity;
    }
    if (cur.movement === "out") {
      return acc - cur.quantity;
    }
  }, 0);

  return total > 0;
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

isItemAvailable(101, transactions); //?
// false
isItemAvailable(103, transactions); //?
// false
isItemAvailable(105, transactions); //?
// true
