// Write a function that combines two arrays passed as arguments, and returns a
// new array that contains all elements from both array arguments, with each
// element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the
// same number of elements.

function interleave(array1, array2) {
  const combinedArray = [];
  array1.forEach((item, index) => {
    combinedArray.push(array1[index], array2[index]);
  });

  return combinedArray;
}

interleave([1, 2, 3], ["a", "b", "c"]); //?
// [1, "a", 2, "b", 3, "c"]
