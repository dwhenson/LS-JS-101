/* eslint-disable */
//  What does this code log and why?

let person = {
  name: "Corine",
  age: 12,
};

function changeAge(age) {
  person.age = age;
}

function changeAgeName(name, age) {
  let person = {};
  person.name = name;
  if (age) {
    changeAge(age);
  }
}

changeAgeName("Franck", 25);

console.log(person);
