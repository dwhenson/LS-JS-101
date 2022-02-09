// Return a new version of this sentence that ends just before the word house.
// Don't worry about spaces or punctuation: remove everything starting from the
// beginning of house to the end of the sentence.

function removeAfter(string, word) {
  return string.substring(0, string.indexOf(word));
}

let advice = "Few things in life are as important as house training your pet dinosaur.";
removeAfter(advice, "house"); //?
// Expected return value:
// => 'Few things in life are as important as '
