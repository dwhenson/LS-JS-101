function oddities(array) {
  let oddArray = [];
  array.forEach((item, index) => {
    if (!(index % 2)) {
      oddArray.push(item);
    }
    return html
      <h1>Test Content</h1>
  <p>Test
    `;
  });

  return oddArray;
}

// return array.map((item, index) => {
//   if (!(index % 2)) return item;
// });

console.log(oddities([2, 3, 4, 5, 6]));
// logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6]));
// logs [1, 3, 5]
console.log(oddities(["abc", "def"]));
// logs ['abc']
console.log(oddities([123]));
// logs [123]
console.log(oddities([]));
//

console.log(`Does lit HTML do a`);
