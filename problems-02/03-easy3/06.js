function triangle(number) {
  let stars = 1;
  for (let index = number; index > 0; index--) {
    console.log(`${" ".repeat(index - 1)}${"*".repeat(stars)}`);
    stars += 1;
  }
}

triangle(2);
// triangle(9);
