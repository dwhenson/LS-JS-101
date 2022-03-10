function retire(ageNow, ageRetire) {
  let yearsToRetire = ageRetire - ageNow;
  let currentYear = new Date().getFullYear();
  let retireYear = currentYear + yearsToRetire;

  return `It's ${currentYear}. You will retire in ${retireYear}. Only ${yearsToRetire} years left to go.`;
}

retire(45, 60); //?
