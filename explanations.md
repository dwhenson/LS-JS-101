<!-- // Find the length of the longest substring in the given string
// that is the same in reverse.

// As an example, if the input was "I like racecars that go fast",
// the substring's ("racecar") length would be 7.

// If the length of the input string is 0, return value must be 0.
//
// 1) Find every sub-string in string
//   - take each letter in turn
//   - create sub-string starting at letter, and increasing by 1 each time
//   - add each value to an array

// 2) Find sub-string that is a palindrome
//   - filter over array of sub-strings
//   - check if string === string.reverse
//   - if so return to filtered array

// 3) Find the longest palindrome
//   - take filtered array
//   - sort by string length
//   - return the longest string's length
//
//
//   console.log(longestPalindrome("a")); // 1
// console.log(longestPalindrome("aa")); // 2
// console.log(longestPalindrome("baa")); // 2
// console.log(longestPalindrome("aab")); // 2
// console.log(longestPalindrome("baabcd")); // 4
// console.log(longestPalindrome("baablkj12345432133d")); // 9 -->