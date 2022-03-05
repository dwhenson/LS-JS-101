function oddities(array) {
  array.forEach((item, index) => {
    if (!(index % 2)) {
      console.log(item);
    }
  });
}
