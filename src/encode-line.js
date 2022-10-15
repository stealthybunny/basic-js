const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
// let str = 'abbbc';
// console.log(encodeLine(str));

function encodeLine(str) {
  let arr = str.split('');
  let output = '';
  let acc = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      acc += 1;
    }
    else {
      if (acc === 1) {
        output = output + `${arr[i]}`;
      }
      else {
        output = output + `${acc}` + `${arr[i]}`;
        acc = 1;
      }
    }
  }
  console.log(output)
  return output;
}

module.exports = {
  encodeLine
};
