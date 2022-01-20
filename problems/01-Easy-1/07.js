const shortLongShort = function (string1, string2) {
  return string1.length < string2.length
    ? `${string1}${string2}${string1}`
    : `${string2}${string1}${string2}`;
};
