// Q1
// No, sets the fifth item in array as 5
// Returns undefined

// Q2
// string.endsWith("!")

// Q3: Determine whether the following object of people and their age contains
// an entry for 'Spot':
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages.spot ?? "Not found");
// console.log(Object.hasOwn(ages, "spot"));

// Q4: Using the following string, create a new string that contains all
// lowercase letters except for the first character, which should be
// capitalized. (See the example output.)

function capitalized(string) {
  return string[0].toUpperCase() + string.substring(1);
}

let munstersDescription = "the Munsters are CREEPY and Spooky.";
capitalized(munstersDescription);
// => The munsters are creepy and spooky.
