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
    var getAction = Object.keys(argv)[1];
    this.action = this.getAction(getAction);
    // console.log('the action here is' , this.action);
    this.payload = this.getNote(argv.a || argv.add);
    // console.log('full note with action',this);
    this.category=argv.category;
  }
  getAction(action) {
    const vaildAction = /add|a|list|delete/i;
    console.log('action :' , action);
    let actionTest = vaildAction.test(action);
    return actionTest ?  action : errorHandlerAction();
  }
  getNote(str) {
    let regex = /\b[A-Z]\w*/gi;
    let strTest = regex.test(str);
    return strTest ? str : errorHandlerNote();
  }
  valid() {
    return (this.action && this.payload);
  }
}
function errorHandlerNote() {
  console.log('invaled note');
}
function errorHandlerAction() {
  console.log('invaled Action');
}
module.exports = Input;