// Use the map method to return a new array identical in structure to the
// original but, with each number incremented by 1. Do not modify the
// original data structure..

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

function newArray(array) {
  return array.map((object) => {
    const newObject = {};
    for (const key in object) {
      newObject[key] = object[key] + 1;
    }
    return newObject;
  });
}

newArray(arr); //?
arr; //?
