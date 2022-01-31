const isLeapYear = function (year) {
  let leapYear = false;

  if (year <= 1752) {
    if (year % 4 === 0) leapYear = true;
    return;
  }

  if (year % 4 === 0) leapYear = true;
  if (year % 4 === 0 && year % 100 === 0) leapYear = false;
  if (year % 100 === 0 && year % 400 === 0) leapYear = true;
  return leapYear;
};

isLeapYear(2016); // ? true
isLeapYear(2015); // ? false
isLeapYear(2100); // ? false
isLeapYear(2400); // ? true
isLeapYear(240_000); // ? true
isLeapYear(240_001); // ? false
isLeapYear(2000); // ? true
isLeapYear(1900); // ? false
isLeapYear(1752); // ? true
isLeapYear(1700); // ? false
isLeapYear(1); // ? false
isLeapYear(100); // ? false
isLeapYear(400); // ? true
