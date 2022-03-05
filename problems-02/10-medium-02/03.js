function triangle(ang1, ang2, ang3) {
  const angleArray = [ang1, ang2, ang3];

  if (
    angleArray.reduce((acc, cur) => (acc += cur)) !== 180 ||
    angleArray.some((angle) => angle <= 0)
  ) {
    return "invalid";
  }

  if (angleArray.some((angle) => angle === 90)) return "right";
  if (angleArray.some((angle) => angle > 90)) return "obtuse";
  if (angleArray.every((angle) => angle < 90)) return "acute";
  return "Check and try again.";
}

triangle(60, 70, 50); //?
// "acute"
triangle(30, 90, 60); //?
// "right"
triangle(120, 50, 10); //?
// "obtuse"
triangle(0, 90, 90); //?
// "invalid"
triangle(50, 50, 50); //?
// "invalid"
