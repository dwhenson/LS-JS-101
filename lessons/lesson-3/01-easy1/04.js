// Q4: Using the following string, create a new string that contains all
// lowercase letters except for the first character, which should be
// capitalized. (See the example output.)

function capitalized(string) {
  return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

let munstersDescription = "the Munsters are CREEPY and Spooky.";
capitalized(munstersDescription);
// => The munsters are creepy and spooky.
