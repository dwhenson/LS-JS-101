function staggeredCase(string) {
  let staggered = [];
  string.split("").forEach((letter, index) => {
    index % 2 === 0
      ? staggered.push(letter.toUpperCase())
      : staggered.push(letter.toLowerCase());
  });
  return staggered.join("");
}

staggeredCase("I Love Launch School!"); //?
staggeredCase("ALL_CAPS"); //?
staggeredCase("ignore 77 the 4444 numbers"); //?

// "I LoVe lAuNcH ScHoOl!"
// "AlL_CaPs"
// "IgNoRe 77 ThE 4444 nUmBeRs"
