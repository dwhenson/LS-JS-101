// This code would fail when the input is 0 or a negative number, and asked Alan
// to change the loop. How can he make this work without using a do/while loop?
// Note that we're not looking to find the factors for 0 or negative numbers,
// but we want to handle it gracefully instead of raising an exception or going
// into an infinite loop.

function factors(number) {
  if (number <= 0) return "Only works with numbers greater than zero.";
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

factors(10); //?
