// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function maleAges(object) {
  let totalAge = 0;
  for (const member in object) {
    if (object[member].gender === "male") {
      totalAge += object[member].age;
    }
  }
  return totalAge;
}

maleAges(munsters); //?
