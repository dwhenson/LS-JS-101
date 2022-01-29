const readlineSync = require("readline-sync");
const num1 = Number(readlineSync.question("Whats the first number?\n"));
const num2 = Number(readlineSync.question("Whats the second number?\n"));
console.log(`
    ==> ${num1} + ${num2} = ${num1 + num2}
    ==> ${num1} - ${num2} = ${num1 - num2}
    ==> ${num1} * ${num2} = ${num1 * num2}
    ==> ${num1} / ${num2} = ${num1 / num2}
    ==> ${num1} % ${num2} = ${num1 % num2}
    ==> ${num1} ** ${num2} = ${num1 ** num2}
  `);
