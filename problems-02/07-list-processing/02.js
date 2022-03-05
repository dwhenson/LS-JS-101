const NUMBER_WORDS = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

function alphabeticNumberSort(array) {
  //   create array with only relevant numbers
  const filteredArray = [];
  const pairedArray = Object.entries(NUMBER_WORDS);
  array.forEach((number) => {
    if (pairedArray[number]) {
      filteredArray.push(pairedArray[number]);
    }
  });
  // sort filtered array and convert to number
  return filteredArray
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map((item) => Number(item[0]));
}

alphabeticNumberSort([3, 0, 1, 2]); //?

alphabeticNumberSort([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]);
