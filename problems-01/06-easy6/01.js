function repeater(string) {
  let repeated = [];
  for (const letter of string) {
    repeated.push(letter + letter);
  }
  return repeated.join("");
}
