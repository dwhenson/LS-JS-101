function isBalanced(string) {
  const opening = string.split("").filter((letter) => letter === "(").length; //?
  const closing = string.split("").filter((letter) => letter === ")").length; //?
  return opening === closing;
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
