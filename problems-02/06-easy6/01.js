function repeater(string) {
  return string
    .split("")
    .map((letter) => letter + letter)
    .join("");
}

repeater("Hello"); //?
// "HHeelllloo"
repeater("Good job!"); //?
// "GGoooodd  jjoobb!!"
repeater(""); //?
// ""
