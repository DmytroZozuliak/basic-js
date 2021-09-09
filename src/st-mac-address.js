import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let sub = n.split('-');
  if (n.length !== 17 || sub.length !== 6) {
    return false;
  }
  let arr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];

  let res = [];
  for (const el of sub) {
    let filter = el
      .split('')
      .filter(e => arr.includes(e))
      .join('');
    res.push(filter);
  }
  if (res.join('').length === sub.join('').length) {
    return true;
  }
  return false;
  // remove line with error and write your code here
}
