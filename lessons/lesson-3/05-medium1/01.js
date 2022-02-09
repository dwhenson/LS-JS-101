// write a program that outputs The Flintstones Rock! 10 times, with each line
// indented 1 space to the right of the line above it.

const string = "The Flintstones Rock!";

for (let index = 0; index < 11; index++) {
  console.log(string.padStart(string.length + index, " "));
}
