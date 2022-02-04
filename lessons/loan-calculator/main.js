// TODO how to strip out numbers only?

const readline = require("readline-sync");
const message = require("./loan-messages.json");

/* ====================================================
   Functions
   ==================================================== */

/* Helpers
/* ==================================================== */

/**
 * Prints message to the terminal
 * @param      {string}  msg     The message
 */
function prompt(msg) {
  console.log(`=> ${msg}`);
}

/**
 * Checks if input is a valid number
 * @param      {string}  number  The number as a string
 * @return     {number}  { description_of_the_return_value }
 */
function invalidNumber(number) {
  return !(Number(number) >= 0) || Number.isNaN(Number(number));
}

/* Lib
/* ==================================================== */

/**
 * Calculates the monthly payment for a long
 * @param      {number}  totalLoan       The total loan
 * @param      {number}  monthlyRate     The monthly interest rate
 * @param      {number}  monthsDuration  The length of the loan in months
 * @return     {number}  The amount to pay each month
 */
const monthlyAmount = function (totalLoan, yearlyRate, monthsDuration) {
  const monthlyRate = yearlyRate / 100 / 12;
  let monthlyAmount;
  if (monthlyRate) {
    monthlyAmount =
      totalLoan * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -monthsDuration)));
  } else {
    monthlyAmount = totalLoan / monthsDuration;
  }
  return monthlyAmount.toFixed(2);
};

/* ====================================================
   App
   ==================================================== */

prompt("Welcome to the Mortgage Calculator");
// While the user wants to continue keep iterating
while (true) {
  // Q1 get amount loan is for
  prompt("How many dollars is your loan for?");
  let totalLoan = readline.question();

  // Check if months duration is valid
  while (invalidNumber(totalLoan)) {
    prompt(message["error"]);
    totalLoan = readline.question();
  }

  // Q2 get interest rate
  prompt("What is the Annual Percentage Interest Rate (APR)?");
  let yearlyRate = readline.question();

  // Check if months duration is valid
  while (invalidNumber(yearlyRate)) {
    prompt(message["error"]);
    yearlyRate = readline.question();
  }

  // Q3 get months duration for loan
  prompt("How many months is your loan for?");
  let monthsDuration = readline.question();

  // Check if months duration is valid
  while (invalidNumber(monthsDuration)) {
    prompt(message["error"]);
    monthsDuration = readline.question();
  }

  // Perform the calculation and print the answer
  console.log(
    `You have to pay $${monthlyAmount(totalLoan, yearlyRate, monthsDuration)} each month.`
  );

  // Check if user would like to continue (if true return to start of while loop)
  const answer = readline.keyInYNStrict("Would you like to perform another calculation?");
  if (!answer) break;
}
