function letterCaseCount(string) {
  const lowercase = string.match(/[a-z]/g) ?? [];
  const uppercase = string.match(/[A-Z]/g) ?? [];
  const neither = string.match(/[^a-zA-Z]/g) ?? [];

  return {
    lowercase: lowercase.length,
    uppercase: uppercase.length,
    neither: neither.length,
  };
}

letterCaseCount("abCdef 123"); //?
letterCaseCount("AbCd +Ef"); //?
letterCaseCount("123"); //?
letterCaseCount(""); //?

// { lowercase: 5, uppercase: 1, neither: 4 }
// { lowercase: 3, uppercase: 3, neither: 2 }
// { lowercase: 0, uppercase: 0, neither: 3 }
// { lowercase: 0, uppercase: 0, neither: 0 }
