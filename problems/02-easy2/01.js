function greetings(names, details) {
  return `
    Hello ${names.join(" ")}! Nice to have a ${details.title} ${details.occupation} here.
  `;
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));
