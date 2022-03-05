// Write a function that takes an array of numbers and returns the sum of the
// sums of each leading subsequence in that array.

function sumOfSums(array) {
  return array
    .map((_, index) => {
      return array.slice(0, index + 1).reduce((acc, cur) => (acc += cur));
    })
    .reduce((acc, cur) => (acc += cur));
}

sumOfSums([3, 5, 2]); //?
sumOfSums([1, 5, 7, 3]); //?
sumOfSums([4]); //?
sumOfSums([1, 2, 3, 4, 5]); //?

// (3) + (3 + 5) + (3 + 5 + 2) --> 21
// (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// 4
// 35

/*
# PROBLEM
INPUT:
- array of numbers
OUTPUT:
- number
RULES:
- array always contains at least one number.

# DATA STRUCTURE
- arrays

# ALGORITHM
1. Convert single array into nested array of desired values
  - Get first value, add to parent array
  - Get first value and second value, add to parent array
  - Get First value, second value and third value, add to parent array
  - ETC. E.g. [[1], [1, 2], [1, 2, 3]]

2. Add together the total of each sub array
3. Return that value

# CODE
SET parentArray = []

SUBPROCESS - Create nested arrays
  iterate over parent array
  get first number each time, array items up to index+1 (slice)
  push that value to parent array

SUBPROCESS - Sum values of each nested array
  iterate over parent array
  take each sub array and return total value (reduce)

GET sum of each item in parent array (reduce)
 */
