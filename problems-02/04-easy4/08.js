function wordSizes(string) {
  if (!string) return {};

  let count = {};
  let words = string.replace(/[^a-z\s]/gi, "").split(" ");

  words.forEach((word) => {
    count[word.length] = count[word.length]
      ? (count[word.length] += 1)
      : (count[word.length] = 1);
  });

  return count;
}

wordSizes("Four score and seven."); //?
// { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); //?
// { "3": 5, "6": 3 }
wordSizes("What's up doc?"); //?
// { "2": 1, "3": 1, "5": 1 }
wordSizes(""); //?
// {}
