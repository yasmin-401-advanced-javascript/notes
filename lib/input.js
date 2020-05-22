'use strict';

/**
 * Simple Server
 * @module input
 */

const minimist = require('minimist');

/**
 * sample of input
 * node notes.js --add 'here is our note'
 */

class Input {
  constructor() {
    // console.log('this is the our note with full doc:', process.argv);
    var argv = minimist(process.argv.slice(2));
    // console.log("minimist()", argv);
    var getAction = argv[Object.keys(argv)[1]];

    this.action = this.getAction(getAction);
    console.log(this.action);
    this.payload = this.getNote(argv.a || argv.add);
    console.log(this, 'here  we go');
  }
  getAction(action) {
    const vaildAction = /add|a|A|Add|ADD/i;
    return vaildAction.test(action);
  }
  getNote(str) {
    let regex = /\b[A-Z]\w*/gi;
    let strTest = regex.test(str);
    return strTest ? str : errorHandler();
  }
  valid() {
    return (this.action && this.payload);
  }
}
function errorHandler() {
  console.log('invaled note');
}
module.exports = Input;