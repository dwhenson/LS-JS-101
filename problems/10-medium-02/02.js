function triangle(side1, side2, side3) {
  const slidesArray = [side1, side2, side3];
  const [one, two, three] = slidesArray.sort((a, b) => a - b);

  if (slidesArray.includes(0)) return "invalid";
  if (slidesArray[2] - (slidesArray[0] + slidesArray[1]) > 0) return "invalid";

  if (one === two && two === three) return "equilateral";
  if (one === two || one === three || two === three) return "isosceles";
  return "scalene";
}

triangle(3, 3, 3); //?
// "equilateral"
triangle(1.5, 3, 3); //?
// // "isosceles"
triangle(3, 4, 5); //?
// // "scalene"
triangle(0, 3, 3); //?
// // "invalid"
triangle(3, 1, 1); //?
// "invalid"
