function sumOfSums(array) {
  let total = 0;

  array.forEach((_, index) => {
    total += array.slice(0, index + 1).reduce((acc, cur) => (acc += cur), 0);
  });

  return total;
}

sumOfSums([3, 5, 2]); //?
// (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]); //?
// // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]); //?
// // 4
sumOfSums([1, 2, 3, 4, 5]); //?
// // 35
