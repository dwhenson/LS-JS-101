function halvsies(array) {
  const divider = Math.ceil(array.length / 2);
  return [array.slice(0, divider), array.slice(divider)];
}

halvsies([1, 2, 3, 4]); //?
halvsies([1, 5, 2, 4, 3]); //?
halvsies([5]); //?
halvsies([]); //?
