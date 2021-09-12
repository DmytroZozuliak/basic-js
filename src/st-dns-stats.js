import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const reversedDomains = domains.map(el => el.split('.').reverse());
  const result = {};

  for (const domain of reversedDomains) {
    let out = '';
    domain.forEach(elem => {
      out = `${out}.${elem}`;
      // console.log(out);
      if (out in result) {
        result[out]++;
      } else {
        result[out] = 1;
      }
    });
  }

  return result;
}
