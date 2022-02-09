// Write two one-line expressions to count the number of lower-case t characters
// in each of the following strings:

const countTs = (string) => [...string].filter((letter) => letter === "t").length;

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

countTs(statement1); //?
countTs(statement2); //?
