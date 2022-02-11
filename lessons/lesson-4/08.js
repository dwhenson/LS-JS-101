// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

function totalAges(object) {
  return Object.values(object).reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
}

totalAges(ages); //?
