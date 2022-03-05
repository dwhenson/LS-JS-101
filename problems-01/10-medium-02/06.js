function initializeNumbers(number) {
  const numbers = [];
  for (let arrayNumber = 1; arrayNumber <= number; arrayNumber++) {
    numbers.push(arrayNumber);
  }
  return numbers;
}

function sumSquareDifference(number) {
  const numbers = initializeNumbers(number);
  const sumCount = numbers.reduce((acc, cur) => (acc += cur), 0) ** 2;
  const sumSquares = numbers.reduce((acc, cur) => (acc += cur **= 2), 0);
  return sumCount - sumSquares;
}

sumSquareDifference(3); //?
// 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10); //?
// 2640
sumSquareDifference(1); //?
// 0
sumSquareDifference(100); //?
// 25164150
