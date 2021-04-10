/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let index = Math.floor(array.length / 2);
  while (array[index] !== value) {
    if (array[index] > value) {
      index = Math.floor(index / 2);
    } else {
      index += Math.floor((array.length - index) / 2);
    }
  }
  return index;
}

module.exports = findIndex;
