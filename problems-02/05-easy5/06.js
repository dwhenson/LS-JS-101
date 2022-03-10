function multiplicativeAverage(numberArray) {
  return String(
    (
      numberArray.reduce((acc, cur) => {
        return (acc *= cur);
      }, 1) / numberArray.length
    ).toFixed(3)
  );
}

multiplicativeAverage([3, 5]); //?
multiplicativeAverage([2, 5, 7, 11, 13, 17]); //?

// "7.500"
// "28361.667"
