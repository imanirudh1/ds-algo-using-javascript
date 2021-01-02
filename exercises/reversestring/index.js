// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //using inbuilt reverse
  // return str.split('').reverse().join('')
  //using for loop
  var reversed = ''
  for (let char of str) {
    reversed = char + reversed
  }
  return reversed
}

module.exports = reverse
