function crunch(string) {
  let singles = [];
  for (let index = 0; index < string.length; index++) {
    if (string[index] === string[index + 1]) {
      continue;
    }
    singles.push(string[index]);
  }

  return singles.join("");
}

crunch("ddaaiillyy ddoouubbllee"); //?
("daily double");
crunch("4444abcabccba"); //?
// "4abcabcba"
crunch("ggggggggggggggg"); //?
// "g"
crunch("a"); //?
// "a"
crunch(""); //?
("");
