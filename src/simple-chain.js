const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  output: [],
  outputStr: '',
  getLength() {
    return this.output.length;
  },
  addLink(value) {
    this.output.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)|| position <= 0 || position > this.getLength() ) {
      this.output = [];
      this.outputStr = '';
      throw new Error ("You can't remove incorrect link!");
    }
    else {
      this.output.splice(position - 1, 1);
    }
      
      return this;
  },
  reverseChain() {
    this.output.reverse();
    return this;
  },
  finishChain() {
    this.outputStr = this.output.join(' )~~( ');
    this.output = [];
    this.outputStr = '( ' + this.outputStr + ' )';
    return this.outputStr;
  }
};

module.exports = {
  chainMaker
};
