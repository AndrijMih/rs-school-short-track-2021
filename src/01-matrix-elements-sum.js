/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = [];

  for (let i = 0; i < matrix.length; i++) {
    const arrs = [];

    for (let j = 0; j < matrix[i].length; j++) {
      arrs.push(matrix[i][j]);
    }
    arr.push(arrs);
  }

  let res = 0;
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        arr[i + 1][j] = 0;
      }
    }
    res += arr[i].reduce((acc, cur) => acc + cur);
  }
  res += arr[arr.length - 1].reduce((acc, cur) => acc + cur);
  return res;
}

module.exports = getMatrixElementsSum;
