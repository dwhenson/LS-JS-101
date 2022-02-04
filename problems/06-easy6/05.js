// Write a function that takes a number as an argument. If the argument is a
// positive number, return the negative of that number. If the argument is a
// negative number, return it as-is.

function negative(number) {
  return Number(String(number).startsWith("-") ? number : "-" + String(number));
}

negative(5); //?
negative(-3); //?
negative(0); //?

// -5
// -3
// -0
