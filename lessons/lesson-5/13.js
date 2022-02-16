// sort the array so that the sub-arrays are ordered based on the sum of the
// odd numbers that they contain.
// TODO: Redo this one

let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

function newArray(array) {
  return array.sort((a, b) => {
    let oddA = a.filter((num) => num % 2).reduce((acc, cur) => (acc += cur));
    let oddB = b.filter((num) => num % 2).reduce((acc, cur) => (acc += cur));
    return oddA - oddB;
  });
}

newArray(arr); //?
// arr; //?
