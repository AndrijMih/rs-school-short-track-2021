/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];

  for (let i = 0; i < matrix.length; i++) {
    const arrs = [];

    for (let j = 0; j < matrix[i].length; j++) {
      arrs.push(matrix[i][j]);
    }
    arr.push(arrs);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i - 1 < 0 && j - 1 < 0) {
        arr[i][j] = Number(matrix[i][j + 1]) + Number(matrix[i + 1][j])
        + Number(matrix[i + 1][j + 1]);
      } else if (i - 1 < 0 && j + 1 >= matrix[i].length) {
        arr[i][j] = Number(matrix[i][j - 1]) + Number(matrix[i + 1][j - 1])
        + Number(matrix[i + 1][j]);
      } else if (i + 1 >= arr.length && j - 1 < 0) {
        arr[i][j] = Number(matrix[i - 1][j]) + Number(matrix[i - 1][j + 1])
        + Number(matrix[i][j + 1]);
      } else if (i + 1 >= arr.length && j + 1 >= matrix[i].length) {
        arr[i][j] = Number(matrix[i - 1][j - 1]) + Number(matrix[i - 1][j])
        + Number(matrix[i][j - 1]);
      } else if (i - 1 < 0) {
        arr[i][j] = Number(matrix[i][j - 1]) + Number(matrix[i][j + 1])
        + Number(matrix[i + 1][j - 1]) + Number(matrix[i + 1][j]) + Number(matrix[i + 1][j + 1]);
      } else if (j - 1 < 0) {
        arr[i][j] = Number(matrix[i - 1][j]) + Number(matrix[i - 1][j + 1])
        + Number(matrix[i][j + 1]) + Number(matrix[i + 1][j]) + Number(matrix[i + 1][j + 1]);
      } else if (i + 1 >= arr.length) {
        arr[i][j] = Number(matrix[i - 1][j - 1]) + Number(matrix[i - 1][j])
        + Number(matrix[i - 1][j + 1]) + Number(matrix[i][j - 1]) + Number(matrix[i][j + 1]);
      } else if (j + 1 >= matrix[i].length) {
        arr[i][j] = Number(matrix[i - 1][j - 1]) + Number(matrix[i - 1][j])
        + Number(matrix[i][j - 1]) + Number(matrix[i + 1][j - 1]) + Number(matrix[i + 1][j]);
      } else {
        arr[i][j] = Number(matrix[i - 1][j - 1]) + Number(matrix[i - 1][j])
        + Number(matrix[i - 1][j + 1]) + Number(matrix[i][j - 1]) + Number(matrix[i][j + 1])
        + Number(matrix[i + 1][j - 1]) + Number(matrix[i + 1][j]) + Number(matrix[i + 1][j + 1]);
      }
    }
  }
  return arr;
}

module.exports = minesweeper;
