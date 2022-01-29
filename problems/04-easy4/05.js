function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[a-z0-9]/g, "");
  return isPalindrome(string);
}

// isRealPalindrome("356653"); //?
isRealPalindrome("356a653"); //?
isRealPalindrome("123ab321"); //?
