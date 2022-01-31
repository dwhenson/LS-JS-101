const readlineSync = require("readline-sync");
const noun = readlineSync.question("Enter a noun:\n");
const verb = readlineSync.question("Enter a verb:\n");
const adjective = readlineSync.question("Enter a adjective:\n");
const adverb = readlineSync.question("Enter a adverb:\n");

console.log(`
  Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
  `);
