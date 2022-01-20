const readlineSync = require("readline-sync");

const SQMETRES_TO_FEET = 10.7639;

const length = readlineSync.question("Enter the length of the room in meters: ");
const width = readlineSync.question("Enter the width of the room in meters: ");

const sqMeters = length * width;
const sqFeet = sqMeters * SQMETRES_TO_FEET;

console.log(
  `The area of the room is ${sqMeters} square meters (${sqFeet.toFixed(2)} square feet)`
);
