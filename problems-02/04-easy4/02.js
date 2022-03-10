function includes(number, array) {
  if (array.includes(number)) {
    return `The number ${number} appears in ${array.join(", ")}`;
  }
}

includes(1, [1, 2, 3]); //?
