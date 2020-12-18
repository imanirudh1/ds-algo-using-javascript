// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //Method #1
  var chunked = []
  var index = 0
  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }
  return chunked

  //Method #2
  //   var newArray = []
  //   for (let element of array) {
  //     var last = newArray[newArray.length - 1]
  //     if (!last || last.length === size) {
  //       newArray.push([element])
  //     } else {
  //       last.push(element)
  //     }
  //   }
  //     return newArray

  //Method #3
  //   var newS = Math.ceil(array.length / size)
  //   var newA = []
  //   var counter = 0
  //   if (newS === 0) {
  //     newS = 1
  //   }
  //   for (let i = 0; i < newS; i++) {
  //     if (array[counter + size]) {
  //       newA.push(array.slice(counter, counter + size))
  //     } else {
  //       newA.push(array.slice(counter))
  //     }
  //     counter += size
  //   }
  //   return newA
}

module.exports = chunk
