function utf16Value(string) {
  const array = [...string];
  let sum = 0;
  for (const [index] of array.entries()) {
    sum += string.charCodeAt(index);
  }
  return sum;
}
