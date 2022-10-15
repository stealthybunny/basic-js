const { NotImplementedError } = require('../extensions/index.js');

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
 function deleteDigit(n) {
  let outArr = [];
  let str = n.toString();
  let arr = str.split('');
  let tempString = '';
  for (let i = 0; i < arr.length; i++) {
    let re = new RegExp(`${arr[i]}`);
    tempString = str.replace(re,'');
    outArr.push(tempString);
    tempString = '';
  }
  return Math.max.apply(0, outArr);
}

module.exports = {
  deleteDigit
};
