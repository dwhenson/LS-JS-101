function logLength(length) {
  let dashes = [];
  for (let dash = 0; dash < length; dash++) {
    dashes.push("-");
  }
  return dashes.join("");
}

function logInBox(string) {
  const length = string.length;
  console.log(`+${logLength(length)}+`);
  console.log(`| ${string} |`);
  console.log(`+${logLength(length)}+`);
}

logInBox("To boldly go where no one has gone before.");
