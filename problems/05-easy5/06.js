// Write a function that takes an array of integers as input, multiplies all of
// the integers together, divides the result by the number of entries in the
// array, and returns the result as a string with the value rounded to three
// decimal places.

function multiplicativeAverage(numberArray) {
  return (
    numberArray.reduce((acc, cur) => {
      return (acc *= cur);
    }, 1) / numberArray.length
  ).toFixed(3);
}

multiplicativeAverage([3, 5]); //?
multiplicativeAverage([2, 5, 7, 11, 13, 17]); //?

// "7.500"
// "28361.667"
