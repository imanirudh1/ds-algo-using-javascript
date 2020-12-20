// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowel = ['a', 'e', 'i', 'o', 'u']
  let counter = 0
  for (let c of str.toLowerCase()) {
    if (vowel.includes(c)) {
      counter++
    }
  }
  return counter
}

// Method 2
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi)
//   return matches ? matches.length : 0
// }

module.exports = vowels
