function logInBox(string) {
  console.log(`+${"-".repeat(string.length)}+`);
  console.log(`+${" ".repeat(string.length)}+`);
  console.log(`+${string}+`);
  console.log(`+${" ".repeat(string.length)}+`);
  console.log(`+${"-".repeat(string.length)}+`);
}

logInBox("To boldly go where no one has gone before.");
