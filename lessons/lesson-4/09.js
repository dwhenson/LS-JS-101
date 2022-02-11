// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

function findMinimum(object) {
  const ages = Object.values(object); //?
  return Math.min(...ages); //?
}

findMinimum(ages); //?
