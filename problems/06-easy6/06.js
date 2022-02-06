function sequence(maxNumber) {
  return [...Array(maxNumber)].map((_, index) => index + 1);
}
