// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var chars = {}
  var count = 0
  var mc = ''
  for (let c of str) {
    //chars[c]=chars[c]+1 || 1
    if (!chars[c]) {
      chars[c] = 1
    } else {
      chars[c]++
    }
  }
  for (let c in chars) {
    if (chars[c] > count) {
      mc = c
      count = chars[c]
    }
  }
  return mc
}

module.exports = maxChar
