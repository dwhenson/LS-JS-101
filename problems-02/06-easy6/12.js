function isBalanced(string) {}

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
