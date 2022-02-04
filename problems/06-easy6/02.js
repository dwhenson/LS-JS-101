// Write a function that takes a string, doubles every consonant character in
// the string, and returns the result as a new string. The function should
// not double vowels ('a','e','i','o','u'), digits, punctuation, or
// whitespace.

const vowels = ["a", "e", "i", "o", "u"];

function doubleConsonants(string) {
  let repeated = [];
  for (const letter of string) {
    if (vowels.includes(letter.toLowerCase()) || !letter.match(/[a-z]/i)) {
      repeated.push(letter);
      continue;
    } else {
      repeated.push(letter + letter);
    }
  }
  return repeated.join("");
}

doubleConsonants("String"); //?
doubleConsonants("Hello-World!"); //?
doubleConsonants("July 4th"); //?
doubleConsonants(""); //?
doubleConsonants("Indigo"); //?

// "SSttrrinngg"
// "HHellllo-WWorrlldd!"
// "JJullyy 4tthh"
// ""
//
