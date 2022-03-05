const vowels = ["a", "e", "i", "o", "u"];

function doubleConsonants(string) {
  let repeated = [];
  for (const letter of string) {
    if (vowels.includes(letter.toLowerCase()) || !letter.match(/[a-z]/i)) {
      repeated.push(letter);
      continue;
    } else {
      repeated.push(letter + letter);
    }
  }
  return repeated.join("");
}
