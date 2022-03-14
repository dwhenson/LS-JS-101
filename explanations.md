logs: let person = {
name: "Corine",
age: 25,
};

Demonstrates that objects are passed by reference and that JavaScript is lexically scoped (ie. that functions run in the scope in which they are defined, not the scope from which they are executed), and shadowing.

In this case we call the function `changeAgeName` on line 21, and pass in two arguments a string `Franck` and a number `25`, which are assigned the local variables `name` and `age` created within the function.

In the function we then create a `person` variable and assign it to an empty object. We then set the name key of this object to equal the string value of the name variable (Franck).

NB we are mutating the local variable `person` that was initialized within the function. This variable shadows the global variable with the same name preventing `changeAgeName` from accessing the global variable.

On the next line, we check if the `age` variable was passed a truthy value, and if so `changeAge` is called with the value of the `age` variable passed as an argument. `changeAge` is defined in the global scope on line 9.

As functions run in the scope they are defined not executed, when this function assigns the value of the age argument to `person.age` the function accesses the global person variable declared on line 4 and assigned to an object with two keys of `name` and `age`.

In addition, as objects are passed by reference not value, the `changeAge` function therefore reassigns the value of `age` on the global `person` variable from 12 to 25.

Finally, as the console.log on line 23 is also defined in the global scope it accesses and logs the value from the global `person` variable rather than the `person` variabel defined within the function scope created inside the `changeAgeName` function.
