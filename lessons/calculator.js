const readline = require("readline-sync");
const message = require("./calculator_messages.json");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trim() === "" || Number.isNaN(Number(number));
}

prompt("What language do you speak?\n 1) English 2) Francais");
let languageChoice = readline.question();

while (!["1", "2"].includes(languageChoice)) {
  prompt("You must choose 1 or 2");
  languageChoice = readline.question();
}

let languageSelection = "en";

switch (languageChoice) {
  case "1":
    languageSelection = "en";
    break;
  case "2":
    languageSelection = "fr";
    break;
}

prompt(message[languageSelection]["welcome"]);

while (true) {
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message[languageSelection]["error"]);
    number1 = readline.question();
  }

  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(message[languageSelection]["error"]);
    number2 = readline.question();
  }

  while (invalidNumber(number2)) {
    prompt(message[languageSelection]["error"]);
    number2 = readline.question();
  }

  prompt(
    "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide"
  );

  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("You must choose 1, 2, 3 or 4");
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }

  console.log({ output });

  prompt(`The result is: ${output}`);

  prompt("Would you like to perform another operation? (y/n)");
  let answer = readline.question();

  if (answer[0].toLowerCase() !== "y") break;
}
