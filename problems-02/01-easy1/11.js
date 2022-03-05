function utf16Value(string) {
  if (!string.length) return 0;

  let charTotal = 0;
  for (let index = 0; index < string.length; index++) {
    charTotal += string.charCodeAt(index);
  }
  return charTotal;
}

utf16Value("Four score"); //?
// 984
utf16Value("Launch School"); //?
// 1251
utf16Value("a"); //?
// 97
utf16Value(""); //?
// 0
