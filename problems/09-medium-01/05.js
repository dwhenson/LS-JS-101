const WORDS_TO_DIGITS = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function wordToDigit(string) {
  const numberWords = Object.keys(WORDS_TO_DIGITS);

  numberWords.forEach((key) => {
    let regex = new RegExp(key, "gi");
    string = string.replace(regex, WORDS_TO_DIGITS[key]);
  });

  return string;
}

wordToDigit("Please call me at Five five five one two three four. Thanks.");
//?
// "Please call me at 5 5 5 1 2 3 4. Thanks."
//
