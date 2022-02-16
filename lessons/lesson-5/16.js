//  write some code that returns an object where the key is the first item in
//  each subarray, and the value is the second.

let arr = [
  ["a", 1],
  ["b", "two"],
  ["sea", { c: 3 }],
  ["D", ["a", "b", "c"]],
];

// function newObject(array) {
//   const newObj = {};
//   array.forEach((item) => {
//     newObj[item[0]] = item[1];
//   });
//   return newObj;
// }

function newObject(array) {
  return Object.fromEntries(array);
}

newObject(arr); //?
// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
