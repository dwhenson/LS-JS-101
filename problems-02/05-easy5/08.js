function digitList(number) {
  return String(number)
    .split("")
    .map((number) => Number(number));
}

digitList(12345); //?
digitList(7); //?
digitList(375290); //?
digitList(444); //?
