function sum(number) {
  return String(number)
    .split("")
    .map((char) => Number(char))
    .reduce((acc, cur) => (acc += cur), 0);
}

sum(23); //?
// 5
sum(496); //?
// 19
sum(123456789); //?
// 45
