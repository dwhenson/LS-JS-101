// Return a new string that swaps the case of all of the letters:

let munstersDescription = "The Munsters are creepy and spooky.";

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

function isLowerCase(str) {
  return str === str.toLowerCase() && str !== str.toUpperCase();
}

function changeCase(string) {
  return string
    .split("")
    .map((letter) => (isLowerCase(letter) ? letter.toUpperCase() : letter.toLowerCase()))
    .join("");
}

changeCase(munstersDescription); //?
