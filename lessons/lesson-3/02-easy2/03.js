// Given a number and an array, determine whether the number is included in the
// array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

function checkNumber(array, number) {
  return array.includes(number);
}

let number1 = 8;
let number2 = 95;

checkNumber(numbers, number1); //?
checkNumber(numbers, number2); //?
