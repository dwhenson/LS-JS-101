function swap(string) {
  if (string.length <= 1) return string;
  let words = string.split(" ");
  return words
    .map((word) => word[word.length - 1] + word.slice(1, -1) + word[0])
    .join(" ");
}

swap("Oh what a wonderful day it is"); //?
// "hO thaw a londerfuw yad ti si"
swap("Abcde"); //?
// "ebcdA"
swap("a"); //?
