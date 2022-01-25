/*
 Write a program that prompts the user for two positive integers, and then
 prints the results of the following operations on those two numbers: addition,
 subtraction, product, quotient, remainder, and power. Do not worry about
 validating the input.

 ==> Enter the first number: 23 ==> Enter the second number: 17
 ==> 23 + 17 = 40
 ==> 23 - 17 = 6
 ==> 23 * 17 = 391
 ==> 23 / 17 = 1
 ==> 23 % 17 = 6
 ==> 23 ** 17 = 1.4105003956066297e+23
*/

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
