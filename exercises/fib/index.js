// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  //fibonacci series using tabulation
  //   const table = Array(n + 1).fill(0)
  //   table[1] = 1
  //   for (let i = 0; i <= n; i++) {
  //     table[i + 1] += table[i]
  //     table[i + 2] += table[i]
  //   }
  //   return table[n]

  //using recurrsion
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

module.exports = fib
