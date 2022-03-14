/* eslint-disable */

// Examine the code example below. The last line outputs the string 'Hi' rather than the string 'Hello'. Explain what is happening here and identify the underlying principle that this demonstrates.

let greeting = "Hello";

while (true) {
  greeting = "Hi";
  break;
}

console.log(greeting);

/*
The string "Hi" will be logged to the console. This is because the variable is global and is accessible from inside the block scope of the while loop and is thus reassigned before the value is logged to the console.

By way of explantion:

We first declare a variable on line 1 and assign it to the string "Hello".

Following this on line seven we create a while loop. This loop will continue until
a the condition in the paranthesis evaluates to false, or the loop is stopped using the
'break' key word.

In this case, the loop iterates once, first it reassigns the greeting variable to the string "Hi", then it encounters the break keyword. The break keyword causes the loop to end, and script evaluation continues to log the variable greeting (now assigned to "Hi")

This demonstrates that variables in the outer scope can be accessed and reassigned from inner scopes. Variable scoping rules.
*/
