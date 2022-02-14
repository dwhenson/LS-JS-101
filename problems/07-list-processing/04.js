function leadingSubstrings(string) {
  return string.split("").map((_, index) => string.slice(0, index + 1));
}

leadingSubstrings("abc"); //?
leadingSubstrings("a"); //?
leadingSubstrings("xyzzy"); //?

// ["a", "ab", "abc"]
// ["a"]
// ["x", "xy", "xyz", "xyzz", "xyzzy"]
