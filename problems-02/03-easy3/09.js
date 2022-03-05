function cleanUp(stringToClean) {
  return stringToClean.replace(/[^a-z0-9]+/gi, " ");
}

cleanUp("---what's my +*& line?"); //?
