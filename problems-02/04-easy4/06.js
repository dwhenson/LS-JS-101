function isPalindrome(string) {
  return string.split("").reverse().join("") === string;
}

function isPalindromicNumber(number) {
  let string = String(number)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  return isPalindrome(string);
}

isPalindromicNumber(34543); //?
// true
isPalindromicNumber(123210); //?
// false
isPalindromicNumber(22); //?
// true
isPalindromicNumber(5); //?
// true
