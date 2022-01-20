const isLeapYear = function (year) {
  let leapYear = false;
  if (year % 4 === 0) leapYear = true;
  if (year % 4 === 0 && year % 100 === 0) leapYear = false;
  if (year % 100 === 0 && year % 400 === 0) leapYear = true;
  return leapYear;
};
