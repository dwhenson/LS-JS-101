function reverse(array) {
  for (let index = 0; index < Math.floor(array.length / 2); index++) {
    [array[index], array[array.length - 1 - index]] = [
      array[array.length - 1 - index],
      array[index],
    ];
  }
  return array; //?
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result);
console.log(list === result);
// logs [4,3,2,1]
// logs true
let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1);
console.log(list1 === result1);
// logs  ["e", "d", "c", "b", "a"]
// logs true
let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2);
console.log(list2 === result2);
// logs  ["abc"]
// logs true
let list3 = [];
let result3 = reverse(list3);
console.log(result3);
console.log(list3 === result3);
// logs []
// logs true
