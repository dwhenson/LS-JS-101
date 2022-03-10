function wordSizes(string) {
  if (!string) return {};

  let count = {};
  let words = string.split(" ");

  words.forEach((word) => {
    count[word.length] = count[word.length]
      ? (count[word.length] += 1)
      : (count[word.length] = 1);
  });

  return count;
}

wordSizes("Four score and seven."); //?
// { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); //?
// { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); //?
// { "2": 1, "4": 1, "6": 1 }
wordSizes(""); //?
// {}
