function removeVowels(array) {
  return array.map((word) =>
    word
      .split("")
      .filter((char) => /[^aeiou]/gi.test(char))
      .join("")
  );
}

removeVowels(["abcdefghijklmnopqrstuvwxyz"]); //?
// ["bcdfghjklmnpqrstvwxyz"]
removeVowels(["green", "YELLOW", "black", "white"]); //?
// ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); //?
// ["BC", "", "XYZ"]
