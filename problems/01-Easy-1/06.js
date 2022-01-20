// const readlineSync = require("readline-sync");

const sum = function (max) {
  let total = 0;
  for (let current = 1; current <= max; current += 1) {
    total += current;
  }
  return total;
};

const product = function (max) {
  let total = 1;
  for (let current = 1; current <= max; current += 1) {
    total *= current;
  }
  return total;
};

sum(5); // ?
product(6); // ?
