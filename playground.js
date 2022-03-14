/* eslint-disable max-len */
// Practice problems

function uuid() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let sections = [8, 4, 4, 4, 12];
  let uuid = "";

  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let random = Math.floor(Math.random() * characters.length);
      uuid += characters[random];
    }
    if (sectionIndex < sections.length - 1) {
      uuid += "-";
    }
  });

  return uuid;
}

uuid(); //?
