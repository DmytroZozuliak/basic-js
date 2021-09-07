import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let sequences = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === sequences[0]) {
      if (arr[i + 1]) {
        i++;
      } else {
        continue;
      }
    } else if (element === sequences[1]) {
      if (stack.length > 0 && arr[i - 2] === sequences[0]) {
        continue;
      } else if (stack.length > 0) {
        stack.pop();
      } else {
        continue;
      }
    } else if (element === sequences[2]) {
      if (arr[i + 1]) {
        stack.push(arr[i + 1]);
      } else {
        continue;
      }
    } else if (element === sequences[3]) {
      if (stack.length > 0 && arr[i - 2] === sequences[0]) {
        continue;
      } else if (stack.length > 0) {
        stack.push(arr[i - 1]);
      } else {
        continue;
      }
    } else {
      stack.push(element);
    }
  }
  return stack;
  // remove line with error and write your code here
}
