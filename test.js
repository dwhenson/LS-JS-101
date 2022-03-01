function squareDigits(num) {
  return String(num)
    .split("")
    .reduce((acc, cur) => {
      return acc + String(cur * cur);
    }, 0);
}

squareDigits(3212); //?
