// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

function repeater(string) {
  let repeated = [];
  for (const letter of string) {
    repeated.push(letter + letter);
  }
  return repeated.join("");
}

repeater("Hello"); //?
repeater("Good job!"); //?
repeater(""); //?

// "HHeelllloo"
// "GGoooodd  jjoobb!!"
// ""
