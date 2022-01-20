const readlineSync = require("readline-sync");

const SQMETRES_TO_FEET = 10.7639;

const length = readlineSync.question("Enter the length of the room in meters: ");
const width = readlineSync.question("Enter the width of the room in meters: ");
