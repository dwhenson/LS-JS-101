// Write a function that takes an array of strings and returns an array of the
// same string values, but with all vowels (a, e, i, o, u) removed..

// const vowels = "aeiouAEIOU";
// (!vowels.includes("b")); //?

// function removeVowels(array) {
//   return array
//     .map((string) => string.split(""))
//     .map((letterArray) =>
//       letterArray.filter((letter) => !vowels.includes(letter)).join("")
//     );
// }

function removeVowels(array) {
  return array.map((string) => string.replace(/[aeiou]/gi, ""));
}

// removeVowels(["abcde"]); //?
removeVowels(["abcdefghijklmnopqrstuvwxyz"]); //?
removeVowels(["green", "YELLOW", "black", "white"]); //?
removeVowels(["ABC", "AEIOU", "XYZ"]); //?

// ["bcdfghjklmnpqrstvwxyz"]
// ["grn", "YLLW", "blck", "wht"]
// ["BC", "", "XYZ"]
