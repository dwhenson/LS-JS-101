function wordSizes(string) {
  const summary = {};
  if (!string) return summary;
  string.split(" ").map((word) => {
    return summary[word.length]
      ? (summary[word.length] += 1)
      : (summary[word.length] = 1);
  });
  return summary;
}

wordSizes("Four score and seven."); //?
wordSizes("Hey diddle diddle, the cat and the fiddle!"); //?
wordSizes("What's up doc?"); //?
wordSizes(""); //?
