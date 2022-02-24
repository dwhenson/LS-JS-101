function joinOr(array, delimiter = ", ", junction = "or") {
  if (array.length <= 1) return String(array);
  if (array.length === 2) return array.join(` ${junction} `);
  array.splice(array.length - 1, 1, `${junction} ${array[array.length - 1]}`);
  return array.join(delimiter);
}

joinOr([1, 2, 3]); //?
// => "1, 2, or 3"
joinOr([1, 2, 3], "; "); //?
// => "1; 2; or 3"
joinOr([1, 2, 3], ", ", "and"); //?
// => "1, 2, and 3"
joinOr([]); //?
// => ""
joinOr([5]); //?
// => "5"
joinOr([1, 2]); //?
// => "1 or 2"
