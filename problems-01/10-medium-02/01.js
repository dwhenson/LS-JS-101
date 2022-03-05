function letterPercentages(string) {
  const percentages = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (const letter of string.split("")) {
    if (!"abcdefghijklmnopqrstuvwxyx".includes(letter.toLowerCase())) {
      percentages.neither += 1;
      continue;
    }
    letter === letter.toLowerCase()
      ? (percentages.lowercase += 1)
      : (percentages.uppercase += 1);
  }

  for (const item of Object.entries(percentages)) {
    percentages[item[0]] = ((item[1] / string.length) * 100).toFixed(2);
  }

  return percentages;
}

letterPercentages("abCdef 123"); //?
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef"); //?
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123"); //?
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
