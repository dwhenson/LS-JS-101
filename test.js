function multiply(numbers, factor) {
  let counter = 0;

  while (counter < numbers.length) {
    numbers[counter] *= factor;
    counter += 1;
  }

  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); //?
myNumbers; //?

// => [3, 12, 9, 21, 6, 18]
