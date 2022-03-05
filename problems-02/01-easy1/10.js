function multisum(number) {
  let total = 0;
  for (let counter = 0; counter <= number; counter++) {
    if (!(counter % 3) || !(counter % 5)) {
      total += counter;
    }
  }
  return total;
}

multisum(3); //?
// 3
multisum(5); //?
// 8
multisum(10); //?
// // 33
multisum(1000); //?
// 234178
