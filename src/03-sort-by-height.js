/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newarr = arr.filter((elem) => elem !== -1).sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  const res = [];
  while (i < arr.length) {
    if (arr[i] === -1) {
      res.push(-1);
    } else {
      res.push(newarr[j]);
      j++;
    }
    i++;
  }
  return res;
}

module.exports = sortByHeight;
