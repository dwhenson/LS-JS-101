function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

function isPalindromicNumber(value) {
  const string = value.toString();
  return isPalindrome(string);
}

isPalindromicNumber(34543); //?
isPalindromicNumber(123210); //?
isPalindromicNumber(22); //?
isPalindromicNumber(5); //?
isPalindromicNumber(005); //?
