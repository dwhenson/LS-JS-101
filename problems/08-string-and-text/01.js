// Write a function that takes a string argument and returns true if all of
// the alphabetic characters inside the string are uppercase; false
// otherwise. Ignore characters that are not alphabetic.

function isUppercase(string) {
  return string
    .split("")
    .filter((char) => /^[a-z][A-Z]*$/.test(char))
    .every((char) => char === char.toUpperCase());
}

isUppercase("t"); //?
isUppercase("T"); //?
isUppercase("Four Score"); //?
isUppercase("FOUR SCORE"); //?
isUppercase("4SCORE!"); //?
isUppercase(""); //?

// false
// true
// false
// true
// true
// true

console.log();
