function getRandomIntInclusive(min_, max_) {
  const min = Math.ceil(min_);
  const max = Math.floor(max_);
  const age = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  console.log(`Teddy is ${age} years old!`);
}
