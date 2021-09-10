import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  if (options === undefined) {
    return str;
  }
  if (options.addition !== undefined) {
    //  console.log(options.addition);
    options.addition = String(options.addition);
    //  console.log(options.addition);
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  let main = [];
  let aditional = [];
  //   console.log(options.addition);
  if (options.addition) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      // console.log(options.addition);
      aditional.push(options.addition);
    }
    if (options.additionSeparator) {
      aditional = aditional.join(options.additionSeparator);
    } else {
      aditional = aditional.join('|');
    }
  }

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      main.push(str + aditional);
    }
    if (options.separator) {
      main = main.join(options.separator);
    } else {
      main = main.join('+');
    }
  }
  //   console.log(aditional);
  //   console.log(main);
  return main;
}
