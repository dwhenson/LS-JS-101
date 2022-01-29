function twice(number) {
  const half = parseInt(number.toString().length / 2, 10); //?
  const first = number.toString().substring(0, half); //?
  const second = number.toString().substring(half); //?
  return first === second ? number : number * 2;
}

twice(107); //?
twice(37); //?
twice(3333); //?
twice(7676); //?
