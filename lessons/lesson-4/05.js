// What is the callback's return value in the following code? Also, what is the
// return value of every in this code?

[1, 2, 3].every((num) => {
  return (num *= 2);
});

// 2, 4, 6; False
