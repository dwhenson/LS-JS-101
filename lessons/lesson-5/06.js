// Print the name, age, and gender of each family member:.

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function printDetails(object) {
  for (const member in object) {
    let { age, gender } = object[member];
    console.log(`${member} is a ${age}-year-old ${gender}`);
  }
}

printDetails(munsters); //?
