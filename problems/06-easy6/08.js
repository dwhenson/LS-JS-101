function sequence(count, start) {
  return [...Array(count)].map((_, index) => (index + 1) * start);
}
