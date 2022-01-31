const readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name?\n");

if (name.endsWith("!")) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()} WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}
