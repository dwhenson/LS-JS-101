# PEDAC

## PROBLEM

Return string with each letter repeated by its index in the string, each letter should be separated by a dash, and the first letter should be uppercase.

INPUT:
- string

OUTPUT:
- string

RULES:
- case irrelevant
- more than once is OK
- ignore numbers and punctuation


## EXAMPLE
-

## DATA STRUCTURE
- array
- new Array
- array.fill
- join("-")

## ALGORITHM
- create an array with each letter being an item
- for each item, create an entry in an array, that is as long as the index
  - repeat the item or fill a blank array?
- for each entry, make the first item uppercase and the rest lowercase
- combined the array to a string`joinin` on a `-` and return the string