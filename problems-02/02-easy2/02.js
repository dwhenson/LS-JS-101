function scream(string) {
  const name = string.slice(0, string.length - 1);

  if (string.endsWith("!")) {
    return `HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`;
  }
  return `HELLO ${name}.`;
}

scream("Bob!"); //?
