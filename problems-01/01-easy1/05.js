const readlineSync = require("readline-sync");

const bill = Number.parseFloat(readlineSync.question("What is the bill?\n"));
const tipPercentage = Number.parseFloat(
  readlineSync.question("What is the bill percentage?\n")
);
// const tipPercentage = Number.parseFloat(tipPercentageString);
const tip = bill * (tipPercentage / 100);

console.log(`
    The tip is ${tip}
    The total is ${(bill + tip).toFixed(2)}
  `);
