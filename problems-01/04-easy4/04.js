function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

isPalindrome("madam"); // ?
isPalindrome("Madam"); // ?
isPalindrome("madam i'm adam"); // ?
isPalindrome("356653"); // ?
