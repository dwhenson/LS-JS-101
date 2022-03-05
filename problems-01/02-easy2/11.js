function integerToString(number) {
  const DIGITS = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
  };
  return [...number].map((char) => DIGITS[char]);
}

integerToString(4321); //?
integerToString(0); //?
integerToString(5000); //?
integerToString(1234567890); //?

// "4321"
// "0"
// "5000"
// "1234567890"
