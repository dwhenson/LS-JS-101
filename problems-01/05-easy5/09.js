// Write a function that counts the number of occurrences of each element in a
// given array. Once counted, log each element alongside the number of
// occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

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
];

function countOccurrences(occurrences) {
  const totals = {};
  for (const occurrence of occurrences) {
    if (totals[occurrence]) {
      totals[occurrence] += 1;
    } else {
      totals[occurrence] = 1;
    }
  }

  for (const [key, value] of Object.entries(totals)) {
    console.log(`(${key}) => ${value}`);
  }
}

countOccurrences(vehicles); //?

// console output -- your output sequence may be different
// (car) => 4;
// (truck) => 3;
// (SUV) => 1;
// (motorcycle) => 2;

// Input array; Output: Object
// Loop, and count instances
// Include console in value
