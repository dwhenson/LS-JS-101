// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
    ("hi there");
  }
}

console.log(first());
console.log(second());

// Second returns undefined
