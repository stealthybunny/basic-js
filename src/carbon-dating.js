const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if (typeof sampleActivity  !== 'string') {
    return false
  }
  else {
    let sample = +sampleActivity;
    let t;
    if (sample > 0 && sample <= MODERN_ACTIVITY) {
      t = (Math.log((MODERN_ACTIVITY / sample)) * HALF_LIFE_PERIOD) / (Math.log(2));
      return Math.ceil(t);
    }
      else {
        return false;
      }
  }
}

module.exports = {
  dateSample
};
