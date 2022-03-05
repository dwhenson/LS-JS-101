function sum(number) {
  return String(number)
    .split("")
    .map((char) => Number(char))
    .reduce((acc, cur) => (acc += cur), 0);
}

sum(23); //?
sum(496); //?
sum(123456789); //?
