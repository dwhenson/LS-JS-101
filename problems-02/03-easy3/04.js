function stringy(number) {
  let numberString = "";

  for (let index = 0; index < number; index++) {
    if (!(index % 2)) numberString += 1;
    if (index % 2) numberString += 0;
  }

  return numberString;
}

stringy(2); //?
// "101010"
stringy(9); //?
// // "101010101"
stringy(4); //?
// // "1010"
stringy(7); //?
// // "1010101"
