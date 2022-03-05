const readlineSync = require("readline-sync");

const sum = function (maximum) {
  let total = 0;
  for (let current = 1; current <= maximum; current += 1) {
    total += current;
  }
  return total;
};

const product = function (maximum) {
  let total = 1;
  for (let current = 1; current <= maximum; current += 1) {
    total *= current;
  }
  return total;
};

const maximum = Number.parseInt(
  readlineSync.question("Please enter an integer greater than 0:\n")
);
if (maximum) {
  const calculation = readlineSync.keyIn(
    "Enter 's' to compute the sum, or 'p' to compute the product.\n",
    { limit: "sp" }
  );
  if (calculation === "s") {
    console.log(`The sum of the integers between 1 and ${maximum} is ${sum(maximum)}.`);
  } else {
    console.log(
      `The product of the integers between 1 and ${maximum} is ${product(maximum)}.`
    );
  }
} else {
  console.log("Sorry that's not a number");
}
