function crunch(string) {
  let singles = [];
  for (let index = 0; index < string.length; index++) {
    if (string[index] === string[index + 1]) {
      continue;
    } else {
      singles.push(string[index]);
    }
  }
  return singles.join("");
}

crunch("ddaaiillyy ddoouubbllee"); //?
crunch("4444abcabccba"); //?
crunch("ggggggggggggggg"); //?
crunch("a"); //?
crunch(""); //?
