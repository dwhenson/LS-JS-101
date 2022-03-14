function reverseWords(words) {
  return words
    .split(" ")
    .map((word) => (word.length > 5 ? word.split("").reverse().join("") : word))
    .join(" ");
}

reverseWords("Professional"); //?
// "lanoisseforP"
reverseWords("Walk around the block"); //?
// "Walk dnuora the kcolb"
reverseWords("Launch School"); //?
// "hcnuaL loohcS"
