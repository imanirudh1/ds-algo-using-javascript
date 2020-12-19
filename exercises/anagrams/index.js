// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const str1 = buildMaps(stringA)
  const str2 = buildMaps(stringB)
  if (Object.keys(str1).length != Object.keys(str2).length) {
    return false
  }
  for (c in str1) {
    if (str1[c] != str2[c]) {
      return false
    }
  }
  return true
}
function buildMaps(str) {
  const charMap = {}
  for (let c of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[c] = charMap[c] + 1 || 1
  }
  return charMap
}

module.exports = anagrams
