import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(diraction = true) {
    this.diraction = diraction;
  }
  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error(`Incorrect arguments!`);
    }

    let kf = Math.ceil(text.length / key.length);
    key = key.repeat(kf).toUpperCase().split('');
    text = text.toUpperCase().split('');

    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    //  console.log(abc);
    //  console.log(text);
    //  console.log(key);

    let result = [];
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      console.log(text[i]);
      if (!abc.includes(text[i])) {
        result.push(text[i]);
      } else {
        let sum = abc.indexOf(text[i]) + abc.indexOf(key[count]);
        console.log(sum);
        let finIndex = -1;

        if (abc.length - 1 - sum < 0) {
          finIndex = Math.abs(abc.length - 1 - sum) - 1;
        } else {
          finIndex = sum;
        }

        result.push(abc[finIndex]);

        count++;
        if (count === key.length) count = 0;
      }
    }

    if (this.diraction === true) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }

  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error(`Incorrect arguments!`);
    }

    let kf = Math.ceil(text.length / key.length);
    key = key.repeat(kf).toUpperCase().split('');
    text = text.toUpperCase().split('');

    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    let result = [];
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      if (!abc.includes(text[i])) {
        result.push(text[i]);
      } else {
        let textIndx = abc.indexOf(text[i]);
        let keyInd = abc.indexOf(key[count]);
        let finIndex;

        if (1 + (textIndx > keyInd)) {
          finIndex = textIndx - keyInd;
        } else {
          finIndex = keyInd - textIndx;
        }

        if (finIndex < 0) {
          finIndex = abc.length + finIndex;
        }

        result.push(abc[finIndex]);

        count++;
        if (count === key.length) count = 0;
      }
    }

    if (this.diraction === true) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
}
