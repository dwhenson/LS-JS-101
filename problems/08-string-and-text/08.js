const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
const test = "yes yes yes no no";

function searchWord(wordToCheck, text) {
  if (!String(wordToCheck) || !String(text)) return "Invalid argument";

  const count = {};
  const stringToCheck = String(wordToCheck);
  const words = String(text).split(" ");

  words.forEach((word) => {
    if (words.includes(stringToCheck)) {
      count[word] ? (count[word] += 1) : (count[word] = 1);
    } else {
      count[stringToCheck] = 0;
    }
  });

  return count[stringToCheck];
}

// searchWord("sed", text); //?
searchWord("qui", text); //?
searchWord("no", test); //?
// 3
