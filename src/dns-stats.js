const { NotImplementedError } = require('../extensions/index.js');

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
 function getDNSStats(domains) {
  let arr = [];
  let output = {};
  for (let el of domains) {
    arr.push(el.split('.'));
  }

  let tempArr = [''];
  let temp = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      tempArr.push(`${arr[i][j]}`);
      temp = tempArr.join('.');
      if (output[temp]) {
        output[temp] += 1;
      }
      else {
        output[temp] = 1;
      }
    }
    tempArr = [''];
    temp = '';
    
  }
  return output;
}

module.exports = {
  getDNSStats
};
