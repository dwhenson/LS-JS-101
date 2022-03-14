const vowels = ["a", "e", "i", "o", "u"];

function doubleConsonants(string) {
  return string
    .split("")
    .map(
      (char) =>
        (char =
          /[^a-z]/gi.test(char) || vowels.includes(char) ? char : char + char)
    )
    .join("");

  // let stringArray = string.split("");
  // let doubled = [];

  // for (let char of stringArray) {
  //   if (/[^a-z]/gi.test(char) || vowels.includes(char)) {
  //     doubled.push(char);
  //   } else {
  //     doubled.push(char + char);
  //   }
  // }
  // return doubled.join("");
}

doubleConsonants("String"); //?
// "SSttrrinngg"
doubleConsonants("Hello-World!"); //?
// "HHellllo-WWorrlldd!"
doubleConsonants("July 4th"); //?
// "JJullyy 4tthh"
doubleConsonants(""); //?
// ""
