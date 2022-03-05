function reverseWord(longWord) {
  return longWord.split("").reverse().join(""); //?
}

function reverseWords(words) {
  return words.split(" ").map((word) => (word.length >= 5 ? reverseWord(word) : word));
}
