// The Array.prototype.reverse method reverses the order of elements in an
// array, and Array.prototype.sort can rearrange the elements in a variety of
// ways, including descending. Both of these methods mutate the original array
// as shown below. Write two distinct ways of reversing the array without
// mutating the original array. Use reverse for the first solution, and sort for
// the second.

let numbersRev = [1, 2, 3, 4, 5];
const newNumbersRev = numbersRev.slice().reverse();

console.log(numbersRev);
console.log(newNumbersRev);

let numbersSort = [1, 2, 3, 4, 5];
const newNumbersSort = [...numbersSort].sort((num1, num2) => num2 - num1);
console.log(numbersSort);
console.log(newNumbersSort);
