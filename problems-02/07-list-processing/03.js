function multiplyAllPairs(array1, array2) {
  let combined = [];

  array1.forEach((a1Element) => {
    array2.forEach((a2element) => {
      combined.push(a1Element * a2element);
    });
  });

  return combined.sort((a, b) => a - b); //?
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);
// [2, 4, 4, 6, 8, 8, 12, 16]
