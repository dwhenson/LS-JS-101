// TODO without using .sort

function bubbleSort(array) {
  if (array.every((item) => typeof item === "number")) {
    return array.sort((a, b) => a - b);
  }
  if (array.every((item) => typeof item === "string")) {
    return array.sort();
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);
// [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);
// [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"];
