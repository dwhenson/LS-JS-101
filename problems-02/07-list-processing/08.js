function buyFruit(array) {
  let list = [];

  array.forEach((subArray) => {
    list.push([...Array(subArray[1])].fill(subArray[0]));
  });

  return list.flat(); //?
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
