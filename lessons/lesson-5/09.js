// return a new array with the same structure, but with the values in each
// subarray ordered -- alphabetically or numerically as appropriate -- in
// ascending order.

let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

function sortItems(parentArray) {
  return parentArray.map((childArray) => {
    if (typeof childArray[0] === "string") {
      return childArray.slice().sort();
    } else {
      return childArray.slice().sort((a, b) => a - b);
    }
  });
}

sortItems(arr); //?
console.log(arr); //?
