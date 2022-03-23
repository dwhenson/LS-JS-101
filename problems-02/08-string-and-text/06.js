function staggeredCase(string) {
  return string
    .split("")
    .map((char, idx) => (idx % 2 ? char.toLowerCase() : char.toUpperCase()))
    .join("");
}

staggeredCase("I Love Launch School!"); //?
// "I LoVe lAuNcH ScHoOl!"
staggeredCase("ALL_CAPS"); //?
// "AlL_CaPs"
staggeredCase("ignore 77 the 4444 numbers"); //?
// "IgNoRe 77 ThE 4444 nUmBeRs"
