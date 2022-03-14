function centerOf(string) {
  if (string.length % 2) {
    return string.charAt(Math.floor(string.length / 2));
  }
  return (
    string.charAt(Math.floor(string.length / 2) - 1) +
    string.charAt(Math.floor(string.length / 2))
  );
}

centerOf("I Love JavaScript"); //?
// "a"
centerOf("Launch School"); //?
// " "
centerOf("Launch"); //?
//  "un"
centerOf("Launchschool"); //?
// "hs"
centerOf("x"); //?
// "x"
