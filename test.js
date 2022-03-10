let nestedArr = [1, [2, 3], { foo: 4 }];
let nestedCopy = nestedArr.slice();

nestedCopy.push(5);
nestedCopy[1].push(6);
nestedCopy[2].bar = 7;

console.log(nestedArr);
console.log(nestedCopy);
