const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let alph = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ];
let ABC = {};
for (let i = 0; i < alph.length; i++) {
  ABC[alph[i]] = i; 
}
message = message.toUpperCase();
key = key.toUpperCase();

let code = [];
key = key.split('');
let keyCode = [];
for (let i = 0; i < 7; i++) {
  key = key.concat(key);
}

for (let i = 0; i < key.length; i++) {
  keyCode.push(ABC[key[i]]);
}

let kkey = [];
  for (let i = 0; i < message.length; i++) {
    if (alph.includes(message[i])) {
      kkey.push(keyCode[i]);
    }
    else{
      kkey.push(' ');
      kkey.push(keyCode[i])
    }
  }
let messagePattern = [];
  let temp = 0;
for (let  i = 0; i < message.length; i++) {
  if (alph.includes(message[i])) {
    temp = (ABC[message[i]] + kkey[i]) % 26;
    code.push(alph[temp])
    temp = 0;
    messagePattern.push(0);
  }
  else {
    messagePattern.push(message[i]);
  }
  }
let output = [];
for (let i = 0; i < messagePattern.length; i++) {
  if (messagePattern[i] !== 0) {
        output.push(messagePattern[i])
  }
  else {
    output.push(code.shift());
  }
}
  return output.join('')
}

  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
