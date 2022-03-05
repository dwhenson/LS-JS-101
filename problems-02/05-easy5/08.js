// Write a function that takes one argument, a positive integer, and returns a
// list of the digits in the number.

// function digitList(numbers) {
//   const numberArray = [];
//   for (const number of numbers.toString().split("")) {
//     numberArray.push(parseInt(number, 10));
//   }
//   return numberArray;
// }

function digitList(numbers) {
  return numbers
    .toString()
    .split("")
    .map((number) => parseInt(number, 10));
}

digitList(12345); //?
digitList(7); //?
digitList(375290); //?
digitList(444); //?
