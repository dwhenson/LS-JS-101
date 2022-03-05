// Write a function that takes a year as input and returns the century

function addSuffix(number) {
  if (String(number).endsWith("1")) return `${number}st`;
  if (String(number).endsWith("2")) return `${number}nd`;
  if (String(number).endsWith("3")) return `${number}rd`;
  return `${number}th`;
}

function century(year) {
  if (year / 100 === 0) {
    return addSuffix(year / 100);
  } else {
    return addSuffix(Math.floor(year / 100 + 1));
  }
}

century(2000); //?
century(2001); //?
century(1965); //?
century(256); //?
century(5); //?
century(10103); //?
century(1052); //?
century(1127); //?
century(11201); //?

// "20th"
// "21st"
// "20th"
// "3rd"
// "1st"
// "102nd"
// "11th"
// "12th"
// "113th"
