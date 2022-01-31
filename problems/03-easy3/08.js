function getGrade(score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  if (average >= 90 && average <= 100) {
    return "A";
  }
  if (average >= 80 && average <= 90) {
    return "B";
  }
  if (average >= 70 && average <= 80) {
    return "C";
  }
  if (average >= 60 && average <= 70) {
    return "D";
  }
  if (average >= 0 && average <= 60) {
    return "F";
  }
}

getGrade(95, 90, 93); //?
getGrade(50, 50, 95); //?
