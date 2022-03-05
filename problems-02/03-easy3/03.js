function stringy(number) {
  let binaryArray = [];
  for (let index = 0; index < number; index++) {
    let number = index % 2 === 0 ? 1 : 0;
    binaryArray += number;
  }
  return binaryArray;
}

stringy(6); //?
stringy(9); //?
stringy(4);
