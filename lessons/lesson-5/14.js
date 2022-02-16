// write some code to return an array containing the colors of the fruits and
// the sizes of the vegetables. The sizes should be uppercase, and the colors
// should be capitalized.

// TODO: Redo this one

let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

// function newArray(object) {
//   const newArray = [];
//   for (const item in object) {
//     if (object[item].type === "fruit") {
//       newArray.push(
//         object[item].colors.map((word) => word[0].toUpperCase() + word.slice(1))
//       );
//     }
//     if (object[item].type === "vegetable") {
//       newArray.push(object[item].size.toUpperCase());
//     }
//   }
//   return newArray;
// }
let capitalize = (word) => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map((attributes) => {
  if (attributes["type"] === "fruit") {
    return attributes["colors"].map((char) => capitalize(char));
  } else {
    return attributes["size"].toUpperCase();
  }
});

// newArray(obj); //?
