function leadingSubstrings(string) {
  // if (string.length <= 1) return string;

  let substrings = [];

  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

leadingSubstrings("abc"); //?
// ["a", "ab", "abc"]
leadingSubstrings("a"); //?
// ["a"]
leadingSubstrings("xyzzy"); //?
// ["x", "xy", "xyz", "xyzz", "xyzzy"]
