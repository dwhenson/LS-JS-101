// Create an object that expresses the frequency with which each letter occurs
// in this string:

let statement = "The Flintstones Rock";

function calcLetterFreq(string) {
  const counter = {};
  const letterArray = string
    .toLowerCase()
    .split("")
    .filter((letter) => letter !== " ");

  letterArray.forEach((letter) => {
    counter[letter] ? (counter[letter] += 1) : (counter[letter] = 1);
  });

  return counter;
}

calcLetterFreq(statement);
