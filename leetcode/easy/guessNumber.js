/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  const result = guess(n);
  if (result === 0) return n;

  if (result === -1) {
    n -= 1;
    return guessNumber(n);
  }

  if (result === 1) {
    n += 1;
    return guessNumber(n);
  }
};
