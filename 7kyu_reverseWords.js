function reverseWords(str) {
  var array = []
  var wordArray = str.split(' ')
  wordArray.forEach(function(element) {
    var reversed = element.split('').reverse().join('')
    array.push(reversed)
  })
  return array.join(' ')
}