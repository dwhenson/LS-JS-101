function swapCase(string) {
  return [...string]
    .map((char) => (/[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase()))
    .join("");
}

// function swapCase(string) {
//   return [...string].map((char) =>
//     /[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase()
//   );
// }

swapCase("CamelCase"); //?
// "cAMELcASE"
swapCase("Tonight on XYZ-TV"); //?
// "tONIGHT ON xyz-tv"
