function mutiplyAllPairs(array1, array2) {
  const combined = [];

  array1.forEach((numberArr1) =>
    array2.forEach((numberArr2) => combined.push(numberArr1 * numberArr2))
  );

  return combined.sort((a, b) => a - b);
}

mutiplyAllPairs([2, 4], [4, 3, 1, 2]); //?
