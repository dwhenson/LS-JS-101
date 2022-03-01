function rotateString(string) {
  return string.slice(1) + string[0];
}

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

rotateRightmostDigits(735291, 1); //?
// 735291
rotateRightmostDigits(735291, 2); //?
// 735219
rotateRightmostDigits(735291, 3); //?
// 735912
rotateRightmostDigits(735291, 4); //?
// 732915
rotateRightmostDigits(735291, 5); //?
// 752913
rotateRightmostDigits(735291, 6); //?
// 352917
