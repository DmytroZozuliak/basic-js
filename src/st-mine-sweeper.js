import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper(matrix) {
  let nMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    nMatrix[i] = matrix[i].slice();
  }

  for (let i = 0; i < matrix.length; i++) {
    let matrixRow = matrix[i];

    for (let k = 0; k < matrixRow.length; k++) {
      let element = matrixRow[k];

      nMatrix[i][k] = 0;

      if (element === false) {
        if (matrix[i][k - 1] !== undefined && matrix[i][k - 1] === true) {
          ++nMatrix[i][k];
        }
        if (matrix[i][k + 1] !== undefined && matrix[i][k + 1] === true) {
          ++nMatrix[i][k];
        }
        if (i - 1 >= 0) {
          if (matrix[i - 1][k] === true) {
            ++nMatrix[i][k];
          }
          if (
            matrix[i - 1][k - 1] !== undefined &&
            matrix[i - 1][k - 1] === true
          ) {
            ++nMatrix[i][k];
          }
          if (
            matrix[i - 1][k + 1] !== undefined &&
            matrix[i - 1][k + 1] === true
          ) {
            ++nMatrix[i][k];
          }
        }
        if (i + 1 < matrix.length) {
          if (matrix[i + 1][k] === true) {
            ++nMatrix[i][k];
          }
          if (
            matrix[i + 1][k - 1] !== undefined &&
            matrix[i + 1][k - 1] === true
          ) {
            ++nMatrix[i][k];
          }
          if (
            matrix[i + 1][k + 1] !== undefined &&
            matrix[i + 1][k + 1] === true
          ) {
            ++nMatrix[i][k];
          }
        }
      } else {
        nMatrix[i][k] = 1;
      }
    }
  }

  return nMatrix;
}
