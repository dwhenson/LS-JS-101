function multiplyList(array1, array2) {
  const combinedArray = [];
  array1.forEach((item, index) => {
    combinedArray.push(array1[index] * array2[index]);
  });
  return combinedArray;
}

multiplyList([3, 5, 7], [9, 10, 11]); //?
// [27, 50, 77]
