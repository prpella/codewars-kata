// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

var isAnagram = function(test, original) {
  var word1 = test.split('').sort().join('').toLowerCase()
  var word2 = original.split('').sort().join('').toLowerCase()
  if (word1.localeCompare(word2) <= 0) {
    return true
  } return false
}