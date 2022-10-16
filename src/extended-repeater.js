const { NotImplementedError } = require('../extensions/index.js');

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
 function repeater(str, options) {
  let obj = arguments[1];
  let addStr = '';
  let output = '';  
    let additionArr = [];
    let addCounter = 1;
    if (obj.additionRepeatTimes) {
      addCounter = obj.additionRepeatTimes;
    }
    for (let  i = 0; i < addCounter; i++) {
      if (obj.addition === null) {
        additionArr[i] = 'null'
      }
      else {
        additionArr[i] = (obj.addition);
      }
     
    }
    if (obj.additionSeparator) {
      addStr = additionArr.join(obj.additionSeparator);
    }
    else {
      addStr = additionArr.join('|');
    }
    console.log(addStr)
    let arr = [];
    let counter = 1;
    if (obj.repeatTimes) {
      counter = obj.repeatTimes;
    }
    for (i = 0; i < counter; i++) {
      arr[i] = str + addStr;
    }
    if (obj.separator) {
      output = arr.join(obj.separator);
    }
    else {
      output = arr.join('+');
    }
    return output
  }

module.exports = {
  repeater
};
