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
  return number.trim() === "" || !(Number(number) >= 0) || Number.isNaN(Number(number));
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

/**
 * Gets the details required from the user
 * @param      {string}  question  The question to ask the user
 * @return     {number}    The response from the user
 */
function getDetails(question) {
  prompt(question);
  let value = readline.question().replace(/[^\d.-]/g, "");

  // Check if input is valid
  while (invalidNumber(value)) {
    prompt(message["error"]);
    value = readline.question().replace(/[^\d.-]/g, "");
  }

  return value;
}

/* ====================================================
   Inits
   ==================================================== */

prompt("Welcome to the Mortgage Calculator");
// While the user wants to continue keep iterating
while (true) {
  // Q1 get amount loan is for
  const totalLoan = getDetails("How many dollars is your loan for?");
  // Q2 get interest rate
  const yearlyRate = getDetails("What is the Annual Percentage Interest Rate (APR)?");
  // Q3 get months duration for loan
  const monthsDuration = getDetails("How many months is your loan for?");
  // Perform the calculation and print the answer
  const result = monthlyAmount(totalLoan, yearlyRate, monthsDuration);
  console.log(`You have to pay $${result} each month.`);
  // Check if user would like to continue (if true return to start of while loop)
  const answer = readline.keyInYNStrict("Would you like to perform another calculation?");
  if (!answer) break;
}
