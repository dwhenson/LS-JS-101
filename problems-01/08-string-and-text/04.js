function wordCap(string) {
  return string
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

wordCap("four score and seven"); //?
wordCap("the javaScript language"); //?
wordCap('this is a "quoted" word'); //?

// "Four Score And Seven"
// "The Javascript Language"
// 'This Is A "quoted" Word'
