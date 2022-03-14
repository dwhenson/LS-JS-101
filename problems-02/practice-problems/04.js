/* eslint-disable */
// 3. What is output and why?

let firstName = "John";

const getName = (name) => {
  name.concat(" Doe");
  name = name.toLowerCase();
  return name;
};

getName(firstName);
console.log(firstName);

/*
Line 13 logs 'John' to the console. This code demonstrates that primitive values, in this case strings, are passed by value and are immutable.


Line 4 we delcare the variabel `firstName` and assign it to the string 'John'.
On line 6 we define an arrow function`getName`, which is called on line 12, with the value of the firstName variable passed to it ('John').
In `getName` function:
  - we first concatenate the string passed into the function with the string ' Doe', to create the string "John Doe". `getName` cannot access or change the value of `firstName` a strings are immutable and are passed into the function by value. Nothing further is done with this new string value.
  - the value passed into the function as a string "John" is then reassigned to a new string that is all in lower case using the `toLowerCase` string method, and returned from the function as 'john'. Again, this is reassignment of the variable `name` to a new string not the mutation of the string passed into the function.
We then exit the function and the value of firstName is logged to the console, which remains unchanged as `John`. If we console.log(getName(firstName)) we would access the reassigned value of `name` as "john".
*/
