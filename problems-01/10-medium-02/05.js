// TODO failed this one

function digitsAreRepeated(value) {
  let failed;
  for (const number of String(value).split("")) {
    const filteredArray = String(value)
      .split("")
      .filter((arrayNumber) => arrayNumber !== number);

    if (filteredArray.includes(number)) {
      failed = true;
    } else {
      failed = false;
    }
  }
  return failed;
}

function isNotMultipleOfSeven(value) {
  return value % 7 !== 0;
}

function isNotOdd(value) {
  return value % 2 === 0;
}

function featured(number) {
  let featuredNumber;
  for (let counter = number + 1; counter < 9876543201; counter++) {
    if (isNotOdd(counter)) {
      continue;
    }
    if (isNotMultipleOfSeven(counter)) {
      continue;
    }
    if (digitsAreRepeated(counter)) {
      continue;
    }
    if (counter === 9876543201) {
      return "No possible number";
    }
    featuredNumber = counter;
    break;
  }
  return featuredNumber;
}

featured(12); //?
// 21
featured(20); //?
// 21
featured(21); //?
// // 35
featured(997); //?
// // 1029
featured(1029); //?
// // 1043
featured(999999); //?
// // // 1023547
featured(999999987); //?
// // // 1023456987
featured(9876543186); //?
// // // 9876543201
featured(9876543200); //?
// // // 9876543201
// featured(9876543201); //?
// // "There is no possible number that fulfills those requirements."
