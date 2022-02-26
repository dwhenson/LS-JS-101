let hands = {
  player: [3, 7, 9, 4],
};

function calculateScore(competitor) {
  let array = hands[competitor];
  let score = array.reduce((acc, cur) => (acc += Number(cur)), 0);
  if (score > 21) {
    if (array.includes(11)) {
      array.splice(
        array.findIndex((number) => number === 11),
        1,
        1
      );
    }
    score = array.reduce((acc, cur) => (acc += Number(cur)), 0);
    return score;
  }
  return score;
}

calculateScore("player"); //?
