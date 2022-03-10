function interleave(array1, array2) {
  let combined = [];

  array1.forEach((_, index) => {
    combined.push(array1[index], array2[index]);
  });

  return combined;
}

interleave([1, 2, 3], ["a", "b", "c"]); //?
// [1, "a", 2, "b", 3, "c"]
