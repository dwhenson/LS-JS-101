function sequence(maxNumber) {
  return Array.from({ length: maxNumber }).map((_, index) => index + 1);
}

sequence(5); //?
// [1, 2, 3, 4, 5]
sequence(3); //?
// [1, 2, 3]
sequence(1); //?
// [1]
