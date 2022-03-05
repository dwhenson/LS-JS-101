// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size. For instance, the word size of "it's"
// is 3, not 4.

function wordSizes(string) {
  const summary = {};
  if (!string) return summary;
  string
    .replace(/[^a-zA-Z0-9 :]/g, "")
    .split(" ")
    .map((word) => {
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

// { "3": 1, "4": 1, "5": 2 }
// { "3": 5, "6": 3 }
// { "2": 1, "3": 1, "5": 1 }
// {}
