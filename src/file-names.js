const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let output = [];
    let obj = {};
  for (i = 0; i < names.length; i++) {
    if (obj[names[i]]) {
      obj[names[i]] += 1;
    }
    else obj[names[i]] = 1;
  }
    let p = 0;
  for (let j = 0; j < names.length; j ++) {
    
    if (obj[names[j]] > 1 && output.includes(names[j])) {
      output.push(`${names[j]}(${p+=1})`);
      obj[names[i]] -= 1;
    }
    else if (obj[names[j]] === 1 && output.includes(names[j])) {
      output.push(`${names[j]}(1)`)
    }
    else {
      output.push(`${names[j]}`)
  
    }
  }
    return output;
  }

module.exports = {
  renameFiles
};
