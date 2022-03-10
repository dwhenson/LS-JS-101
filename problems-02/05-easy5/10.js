function average(numbers) {
  return Math.floor(
    numbers.reduce((acc, cur) => (acc += cur), 0) / numbers.length
  );
}

average([1, 5, 87, 45, 8, 8]); //?
average([9, 47, 23, 95, 16, 52]); //?

// 25
// 40
