// TODO: Failed this one

function fibonacci(number) {
  if (number <= 2) return 1;

  let total = 2;
  let counter = 3;
  while (counter <= number) {
    counter += 1;
    total += total + 1;
  }

  return total;
}

fibonacci(20); //?
// 6765
fibonacci(50); //?
// 12586269025
fibonacci(75); //?
// 2111485077978050
