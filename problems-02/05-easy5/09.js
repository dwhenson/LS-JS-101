let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
  "suv",
];

function countOccurrences(occurrences) {
  let count = {};
  occurrences.forEach((item) => {
    count[item.toLowerCase()] = count[item.toLowerCase()]
      ? (count[item] += 1)
      : 1;
  });
  for (let item in count) console.log(`(${item}) => ${count[item]}`);
}

countOccurrences(vehicles); //?

// console output -- your output sequence may be different
// (car) => 4;
// (truck) => 3;
// (SUV) => 1;
// (motorcycle) => 2;
