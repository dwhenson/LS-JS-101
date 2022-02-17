// Write a function that takes a grocery list in a two-dimensional array and
// returns a one-dimensional array. Each element in the grocery list contains
// a fruit name and a number that represents the desired quantity of that
// fruit. The output array is such that each fruit name appears the number of
// times equal to its desired quantity..

function buyFruit(array) {
  return array
    .map((subArray) => {
      return Array(subArray[1]).fill(subArray[0]);
    })
    .flat();
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]); //?
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/*
# PROBLEM
INPUT:
- multi dimensional array
OUTPUT:
- flat array
RULES:
- each fruit name appears the number of times equal to its desired quantity.

# EXAMPLE
- See left

# DATA STRUCTURE
- arrays

# ALGORITHM
- iterate over parent array
- take each sub array
  - create an array with length of [1] value
  - fill in the values of each item with [0] value
- return array containing all values

# CODE
- Map over parent array (returns new array)
- SUBPROCESS
  - map (returns a new array)
    - Array() - create new empty array of correct length
    - fill() - add in values to empty array based on value
- Then flatten array and return
 */
