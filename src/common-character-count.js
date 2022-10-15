const { NotImplementedError } = require('../extensions/index.js');

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
 function getCommonCharacterCount(s1, s2) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let alphaArr = alpha.split('');

  
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let count = {};
  let index1 = 0;
  let index2 = 0;

  find(arr1,arr2)
  function find(arr1,arr2) {
  
  
  for (let letter of alphaArr) {
    if (arr1.includes(letter) && arr2.includes(letter)) {
      index1 = arr1.indexOf(letter);
      index2 = arr2.indexOf(letter);
      arr1.splice(index1, 1);
      arr2.splice(index2, 1);
      if (count[letter]) {
        count[letter] += 1;
      }
      else {
        count[letter] = 1;
      }
      return find(arr1, arr2)
    }
  }
  }
  let values = Object.values(count);
  let sum = 0;
  for (let item of values) {
    sum += item;
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
