import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = n.toString().split('');
  let min = Math.min(...arr);
  let index = arr.indexOf(min.toString());
  arr.splice(index, 1);
  return +arr.join('');
}
