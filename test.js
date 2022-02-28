// let hands = {
//   player: [3, 20, 11],
// };

// function capitalise(string) {
//   return string.slice(0, 1).toUpperCase() + string.slice(1);
// }

// function calculateScore(competitor) {
//   let array = hands[competitor];
//   let score = array.reduce((acc, cur) => (acc += Number(cur)), 0);
//   if (score > 21) {
//     if (array.includes(11)) {
//       array.splice(
//         array.findIndex((number) => number === 11),
//         1,
//         1
//       );
//       score = array.reduce((acc, cur) => (acc += Number(cur)), 0);
//       console.log(`${capitalise(competitor)} score is over 21, converting 11 to 1.`);
//       return calculateScore(competitor);
//     }
//     return score;
//   }
//   return score;
// }

// calculateScore("player"); //?
// console.log(hands.player);

function formatList(array) {
  const last = array.pop() //?
  const newLast = " and " + last //?
  array.push(newLast).
  return String(array)
}

formatList([1, 2, 6]) //?