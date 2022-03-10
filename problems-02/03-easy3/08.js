function twice(number) {
  let stringNumber = String(number);
  let firstHalf = stringNumber.slice(0, Math.floor(stringNumber.length / 2));
  let secondHalf = stringNumber.slice(Math.floor(stringNumber.length / 2));

  if (firstHalf === secondHalf) {
    return number;
  } else {
    return number * 2;
  }
}

twice(37); //?
// 74
twice(44); //?
// 44
twice(334433); //?
// // 668866
twice(444); //?
// 888
twice(107); //?
// 214
twice(103103); //?
// 103103
twice(3333); //?
// 3333
twice(7676); //?
// 7676;
