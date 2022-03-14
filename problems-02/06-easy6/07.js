function swapName(names) {
  let [last, ...otherNames] = names.split(" ").reverse();
  return `${last}, ${otherNames.reverse().join(" ")}`;
}

swapName("Joe Roberts"); //?
// "Roberts, Joe"
swapName("Karl Oskar Henriksson Ragvals"); //?
