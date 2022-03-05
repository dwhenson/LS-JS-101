function negative(number) {
  return Number(String(number).startsWith("-") ? number : "-" + String(number));
}

negative(5); //?
negative(-3); //?
negative(0); //?
