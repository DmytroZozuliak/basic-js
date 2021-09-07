import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');

  let res = [];
  for (const el1 of s1) {
    if (s2.includes(el1)) {
      res.push(el1);
      let index2 = s2.indexOf(el1);
      s2.splice(index2, 1);
    }
  }
  return res.length;
}
