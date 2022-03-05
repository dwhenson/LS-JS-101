function centerOf(string) {
  const middle = Math.floor(string.length / 2);

  if (string.length % 2) {
    return string.charAt(middle);
  } else {
    return string.charAt(middle) + string.charAt(middle - 1);
  }
}
