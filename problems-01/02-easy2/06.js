function penultimate(words) {
  return words.split(" ")[words.split(" ").length - 2]; //?
}

console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great!") === "is");
