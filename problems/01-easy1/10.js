const multisum = function (max) {
  let total = 0;
  for (let number_ = 1; number_ <= max; number_ += 1) {
    if (!(number_ % 3) || !(number_ % 5)) {
      total += number_;
    }
  }
  return total;
};

multisum(5); // ?
multisum(3); // ?
multisum(5); // ?
multisum(10); // ?
multisum(1000); // ?
