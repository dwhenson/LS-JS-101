// Write a function that returns true or false based on whether or not an
// inventory item is available. As before, the function takes two arguments:
// an inventory item and a list of transactions. The function should return
// true only if the sum of the quantity values of the item's transactions is
// greater than zero. Notice that there is a movement property in each
// transaction object. A movement value of 'out' will decrease the item's
// quantity.

function isItemAvailable(identifier, transactionsList) {
  return (
    transactionsList
      .filter((object) => object.id === identifier)
      .reduce((sum, object) => {
        if (object.movement === "in") {
          return sum + object.quantity;
        } else if (object.movement === "out") {
          return sum - object.quantity;
        }
      }, 0) > 0
  );
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
isItemAvailable(103, transactions); //?
isItemAvailable(105, transactions); //?

// false
// false
// true
