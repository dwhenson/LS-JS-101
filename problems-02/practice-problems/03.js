// /* eslint-disable */
// 3. What does the following program log to the console? Why?

let foo = {
  a: "hello",
  b: "world",
};

let qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*

The output from `foo.a` will be `hi` the output from `qux` will be `hello`. This demonstrates the difference between pass by reference and pass by value.

We can see that at the start of the script we assign `foo` to an object with tow key-value pairs, and `qux` to a string with the value `hello`.

On line 16, we then call a function `bar` which is defined on line 11 and the values of the variables `foo` and `qux` are passed in.

Inside the function:
  `argument1` receives the a reference to the object assigned to `foo`. As such, the first line of the function reference the original object and changes the value of `a` to `hi`. This is then logged to the console on line 18.
  `argument2` receives a copy of the primitive string value that was assigned to `qux`, which at the time of being passed in was `hello`. This string value is then changed to `hi`, but the value is not assigned anywhere.

  As such, `hello` is logged to the console on line 20 as the value of `qux` remains unchanged.
*/
