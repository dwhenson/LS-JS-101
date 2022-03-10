function getGrade(result1, result2, result3) {
  let average = (result1 + result2 + result3) / 3;
  if (average >= 90) return "A";
  if (80 <= average > 90) return "B";
  if (70 <= average > 80) return "C";
  if (60 <= average > 70) return "D";
  return "F";
}

getGrade(95, 90, 93); //?
// "A"
getGrade(50, 50, 95); //?
// "D"

function cleanUp(string) {
  return string.replace(/[^a-z]/gi, " ").replace(/\s+/g, " ");
}

cleanUp("---what's my +*& line?"); //?
// " what s my line "
