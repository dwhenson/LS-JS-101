let readlineSync = require("readline-sync");

let currentAge = Number(readlineSync.question("What is your age?\n"));
let retirementAge = Number(
  readlineSync.question("At what age would you like to retire?\n")
);

const yearsToRetirement = retirementAge - currentAge;
const year = new Date().getFullYear();

console.log(`
    It's ${year}. You will retire in ${year + yearsToRetirement}.
    You have only ${yearsToRetirement} years of work to go!
  `);
