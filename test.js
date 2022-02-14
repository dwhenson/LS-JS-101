[
  { a: "ant", b: "elephant" },
  { c: "cat", d: "dog" },
].filter((object) => {
  return Object.keys(object).every((key) => object[key][0] === key);
});
