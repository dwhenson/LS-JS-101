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
      return childArray.slice().sort((a, b) => b.localeCompare(a));
    } else {
      return childArray.slice().sort((a, b) => b - a);
    }
  });
}

sortItems(arr); //?
console.log(arr); //?
