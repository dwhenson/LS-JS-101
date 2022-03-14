function negative(number) {
  if (/-/.test(number)) {
    return number;
  } else {
    return -number;
  }
}

negative(5); //?
negative(-3); //?
negative(0); //?
