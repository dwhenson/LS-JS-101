function isPalindrome(string) {
  return string.split("").reverse().join("") === string;
}

function isRealPalindrome(string) {
  let filtered = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return isPalindrome(filtered);
}

isRealPalindrome("madam"); //?
// true
isRealPalindrome("Madam"); //?
// true (case does not matter)
isRealPalindrome("Madam, I'm Adam"); //?
// true (only alphanumerics matter)
isRealPalindrome("356653"); //?
// // true
isRealPalindrome("356a653"); //?
// // true
isRealPalindrome("123ab321"); //?
// false
