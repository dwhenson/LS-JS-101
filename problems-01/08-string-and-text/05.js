function swapCase(string) {
  let converted = "";
  for (const letter of string) {
    if (!letter.match(/[a-z]/i)) {
      converted += letter;
    }
    if (letter.match(/[a-z]/)) {
      converted += letter.toUpperCase();
    }
    if (letter.match(/[A-Z]/)) {
      converted += letter.toLowerCase();
    }
  }
  return converted;
}

swapCase("CamelCase"); //?
swapCase("Tonight on XYZ-TV"); //?

// "cAMELcASE"
// "tONIGHT ON xyz-tv"
