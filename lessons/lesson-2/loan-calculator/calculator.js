/* ====================================================
   Variables
   ==================================================== */

const readline = require("readline-sync");
const message = require("./loan-messages.json");

/* ====================================================
   Functions
   ==================================================== */

/* Helpers
/* ==================================================== */

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumberNoZero(number) {
  return number.trim() === "" || Number(number) <= 0 || Number.isNaN(Number(number));
}

function invalidNumberAllowZero(number) {
  return number.trim() === "" || Number(number) < 0 || Number.isNaN(Number(number));
}

function checkValue(value, checkFunction, hint = "") {
  while (checkFunction(value)) {
    prompt(message["error"]);
    if (hint) prompt(hint);
    value = readline.question().replace(/[^\d.-]/g, "");
  }
  return value;
}

/* Lib
/* ==================================================== */

function monthsDurationCalc(question, hint) {
  prompt(question);
  let value = readline.question().replace(/[^\d.-]/g, "");
  value = checkValue(value, invalidNumberNoZero, hint);
  return value;
}

function yearlyRateCalc(question, hint) {
  prompt(question);
  let value = readline.question().replace(/[^\d.-]/g, "");
  value = checkValue(value, invalidNumberAllowZero, hint);
  return value;
}

function totalLoanCalc(question, hint) {
  prompt(question);
  let value = readline.question().replace(/[^\d.-]/g, "");
  value = checkValue(value, invalidNumberNoZero, hint);
  return value;
}

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
   Inits
   ==================================================== */

prompt("Welcome to the loan calculator!");
while (true) {
  const totalLoan = totalLoanCalc(message["loan"]["question"], message["loan"]["hint"]);
  const yearlyRate = yearlyRateCalc(message["rate"]["question"], message["rate"]["hint"]);
  const monthsDuration = monthsDurationCalc(message["duration"]["question"]);
  const payPerMonth = monthlyAmount(totalLoan, yearlyRate, monthsDuration);
  console.log(`You have to pay $${payPerMonth} each month.`);
  const anotherCalc = readline.keyInYNStrict("Would you like to do another calculation?");
  if (!anotherCalc) break;
}
prompt("Thanks for using the loan calculator!");
