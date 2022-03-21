function isPalindrome(word) {
  return word.length > 1 && word.split("").reverse().join("") === word;
}

function leadingSubstrings(str) {
  return [...Array(str.length)].map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return str
    .split("")
    .map((_, idx) => leadingSubstrings(str.slice(idx)))
    .flat();
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

palindromes("abcd"); //?
// []
palindromes("madam"); //?
// [ "madam", "ada" ]

palindromes("hello-madam-did-madam-goodbye"); //?

// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes("knitting cassettes"); //?

// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
