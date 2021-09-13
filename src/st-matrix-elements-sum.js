import { NotImplementedError } from '../extensions/index.js';

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
export default function getMatrixElementsSum(matrix) {
  let sum = 0;
  let zeroIndex = [];

  for (let i = 0; i < matrix.length; i++) {
    const matrixRow = matrix[i];

    for (let k = 0; k < matrixRow.length; k++) {
      const element = matrixRow[k];

      if (zeroIndex.includes(k)) {
        continue;
      }

      if (element === 0) {
        zeroIndex.push(k);
      } else {
        sum += element;
      }
    }
  }

  return sum;
}
