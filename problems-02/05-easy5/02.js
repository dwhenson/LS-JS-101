function union(array1, array2) {
  return Array.from(new Set([...array1, ...array2]));
}

union([1, 3, 5], [3, 6, 9]); //?
