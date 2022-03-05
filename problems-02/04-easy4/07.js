function runningTotal(numberArray) {
  let total = [];
  numberArray.reduce((acc, cur) => {
    total.push((acc += cur));
    return (acc += cur);
  }, 0);
  return total;
}

runningTotal([2, 5, 13]); //?
runningTotal([14, 11, 7, 15, 20]);
runningTotal([3]);
runningTotal([]);
