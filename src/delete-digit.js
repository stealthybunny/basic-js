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
  let arr = [];
  let str = n.toString();
  for (let i = 1; i <= str.length; i++) {
    arr.push(parceInt(str.slice(1,i)));
  }
  console.log(arr)
  return Math.max.apply(0, arr);
}

module.exports = {
  deleteDigit
};
