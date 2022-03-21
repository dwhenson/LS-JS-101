function isUppercase(string) {
  return string
    .split("")
    .filter((element) => /[a-z]/gi.test(element))
    .every((char) => char === char.toUpperCase());
}

isUppercase("t"); //?
// false
isUppercase("T"); //?
// true
isUppercase("Four Score"); //?
// false
isUppercase("FOUR SCORE"); //?
// true
isUppercase("4SCORE!"); //?
// true
isUppercase(""); //?
// true
