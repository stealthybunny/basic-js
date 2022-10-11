const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let teamNameArr = [];
  if (Array.isArray(members) === false) {
    return false
  }
  members.forEach(elm => {
    if (typeof elm === 'string') {
      for (let i = 0; i < elm.length; i++) {
        if (elm[i] !== ' ') {
          teamNameArr.push((elm[i]).toUpperCase());
          break;
        }
      }

    }
  })
  let sorted = teamNameArr.sort();
  return (sorted.join(''));

}

module.exports = {
  createDreamTeam
};
