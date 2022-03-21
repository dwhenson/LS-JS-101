function leadingSubstrings(string) {
  return [...string.split("")].map((_, index) => string.slice(0, index + 1));
}

function substrings(string) {
  return [...string.split("")]
    .map((_, idx) => leadingSubstrings(string.slice(idx)))
    .flat();
}

substrings("abcde"); //?

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
