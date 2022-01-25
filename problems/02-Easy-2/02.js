/*
 Write a program that will ask for user's name. The program will then greet the
 user. If the user writes "name!" then the computer yells back to the user.

 What is your name? Bob Hello Bob.

 What is your name? Bob! HELLO BOB. WHY ARE WE SCREAMING?
*/

const readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name?\n");

if (name.endsWith("!")) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()} WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}
