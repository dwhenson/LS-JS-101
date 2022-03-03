// function capiltaise(array) {
//   return array.join("").slice(0, 1).toUpperCase() + array.join("").slice(1).toLowerCase();
// }

// function accum(string) {
//   let returnValue = [];
//   for (const [index, item] of Object.entries(string.split(""))) {
//     returnValue.push(capiltaise(new Array(Number(index) + 1).fill(item)));
//   }
//   return returnValue.join("-");
// }
//
//Problem Description
// Given the string of alphabetic characters limited to a-z, do as in the sample cases.

// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original
// position in the string argument. (index 0 being position 1, index 1 being
// position 2...) The repeated sequences of a character should be separated
// by a hyphen in the returned string. In the repeated sequences of a
// character included in the returned string, the first instance of the
// character should be upper-case.  Subsequent instances of the character
// should be lowercase.

// TODO - try again with map(item, index)

function accum(string) {
  return string
    .toLowerCase()
    .split("")
    .map((letter, index) => letter.toUpperCase() + letter.repeat(index))
    .join("-");
}

// Test Cases
accum("abcd"); //?
// // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); //?
// // // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt"); //?
// // // "C-Ww-Aaa-Tttt"
