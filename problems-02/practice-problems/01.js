// Question Example: What will line 10 log to the console and why?

let greeting = ["Hello"];

const test = (arr) => {
  arr = ["ByeBye"];
  arr.push("World");
  return arr; //?
};

test(greeting);
console.log(greeting);

/*



*/
