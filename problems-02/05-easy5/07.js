function multiplyList(array1, array2) {
  return array1.map((item, index) => item * array2[index]);
}

multiplyList([3, 5, 7], [9, 10, 11]); //?
// [27, 50, 77]
