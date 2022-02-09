// What will the following two lines of code output?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer); // 50

console.log(answer - 8);
// 34
