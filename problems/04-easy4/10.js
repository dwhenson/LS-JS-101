// Given a string of words separated by spaces, write a function that swaps the
// first and last letters of every word.

// You may assume that every word contains at least one letter, and that the
// string will always contain at least one word. You may also assume that each
// string contains nothing but words and spaces, and that there are no leading,
// trailing, or repeated spaces.
// TODO
function swap(string) {
  const wordArray = string.split(" ");
  const updatedArray = [];
  wordArray.map((word) => {
    const newFirst = word[word.length - 1];
    const newLast = word[0];
    const middle = word.slice(1, word.length - 1);
    return updatedArray.push(`${newFirst}${middle}${newLast ? newLast : ""}`);
  });
  return updatedArray;
}

// swap("Oh what a wonderful day it is"); //?
// swap("Abcde"); //?
swap("a"); //?
// // "hO thaw a londerfuw yad ti si"
// // "ebcdA"
// // "a"
