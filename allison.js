// How do these assessments involve?

// What will the following code output and why?
let x;
let z = [x];
x = 10;

console.log(z);

/*
This code will output `[undefined]` on `line 5`. On `line 1`, we are declaring
a variable called `x` but not initializing it. JavaScript will place it in
a 'Temporal dead-zone' where the program knows the variable exists but it has
no value, not even `null` or `undefined` which describe the absence of a
value.

On `line 3`, we declare the variable `z` and assign it to a new array
with the variable `x` as its only element. At this point, we're accessing
`x`, which JavaScript allows since it exists, even if it has no value.
JavaScript will at this point assign `undefined` to `x` and put that value in
`z`'s array - arriving at a value of `[undefined]`.

We finally give `x` a
value on `line 3`, assigning it to `10`.  This won't have any affect on `z`'s
value. Variables in JavaScript are given a memory address of their own when
they're declared, but any changes to that variable's content can't affect
prior variable access points, like we accessed `x` in `line 2`. So, the
assignment here won't have any change on `z`'s content.

When `z` is printed
on `line 5`, we print what was originally put there, which is `[undefined]`.
*/
