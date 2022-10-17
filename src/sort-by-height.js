const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let newArr = [];
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArr.push(arr[i]);
      arr.splice(i,1,'emptyEl')
    }
  }
  let sorted = newArr.sort((a,b) => {
    return a - b;
  })
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      output.push(sorted.shift()); 
    }
    else {
      output.push(-1)
    }
  }
return output;
}

module.exports = {
  sortByHeight
};
