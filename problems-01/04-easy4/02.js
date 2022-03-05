const readlineSync = require("readline-sync");
const numbers = [];
const num1 = numbers.push(readlineSync.question("First number please\n"));
const num2 = numbers.push(readlineSync.question("Second number please\n"));
const num3 = numbers.push(readlineSync.question("Third number please\n"));
const num4 = numbers.push(readlineSync.question("Fourth number please\n"));
const num5 = numbers.push(readlineSync.question("Fifth number please\n"));
const numToCheck = numbers.push(readlineSync.question("Number to check please\n"));

function checkNumber(numToCheck) {
  return numbers.includes(numToCheck)
    ? `The number ${numToCheck} appears in ${numbers}.`
    : `The number ${numToCheck} does not appear in ${numbers}.`;
}

console.log(checkNumber(numToCheck));
