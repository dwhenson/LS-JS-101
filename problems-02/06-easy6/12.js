function isBalanced(string) {
  let parans = 0;
  for (let char of string) {
    if (char === "(") {
      parans += 1;
    }
    if (char === ")") {
      parans -= 1;
    }
    if (parans < 0) return false;
  }
  return parans === 0;
}

console.log(isBalanced("What (is) this?")); //?
console.log(isBalanced("What is) this?")); //?
console.log(isBalanced("What (is this?")); //?
console.log(isBalanced("((What) (is this))?")); //?
console.log(isBalanced("((What)) (is this))?")); //?
console.log(isBalanced("Hey!")); //?
console.log(isBalanced(")Hey!(")); //?
console.log(isBalanced("What ((is))) up(")); //?

// true
// false
// false
// true
// false
// true
// false
// false
