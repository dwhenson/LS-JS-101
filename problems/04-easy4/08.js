function wordSizes(string) {
  const summary = {};
  string.split(" ").map((word) => {
    return summary[word.length]
      ? (summary[word.length] += 1)
      : (summary[word.length] = 1);
  });

  return summary;
}

wordSizes("Four score and seven."); //?
wordSizes("Hey diddle diddle, the cat and the fiddle!"); //?
// wordSizes("What's up doc?");
// wordSizes("");

// { "3": 1, "4": 1, "5": 1, "6": 1 }
// { "3": 5, "6": 1, "7": 2 }
// { "2": 1, "4": 1, "6": 1 }
// {}
