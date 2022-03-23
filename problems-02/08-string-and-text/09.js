function searchWord(word, text) {
  return text
    .toLowerCase()
    .split(" ")
    .filter((target) => target === word).length;
}
