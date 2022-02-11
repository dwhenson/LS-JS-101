// Write a program that uses this array to create an object where the names are
// the keys and the values are the positions in the array:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function createObject(array) {
  const object = {};

  array.forEach((item, index) => {
    object[item] = index;
  });

  return object;
}

createObject(flintstones); //?
