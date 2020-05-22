'use strict';

/**
 * Simple Server
 * @module input
 */

// const isUrl = require('is-url');
const minimist = require('minimist');

/**
 * sample of input
 * node notes.js --add 'here is our note'
 */

function Input() {
  // console.log('this is the our note with full doc:', process.argv);
  const argv = minimist(process.argv.slice(2));
  // console.log('minimist()', argv);
  var getAction = argv[Object.keys(argv)[1]];

  this.action = this.getAction(getAction);
  // console.log(this.action)
  this.payload = this.getNote(argv.a || argv.add);
  // console.log(this, 'here  we go');
}
/**
 * validat the action
 * @param {string} action
 */
Input.prototype.getAction = function(action) {
//   let error = "the right action is a, add, A, ADD, Add ";
  const vaildAction = /add|a|A|Add|ADD/i;
  return vaildAction.test(action);

};

/**
 * validat the str
 * @param {string} str
 */

// prototype will help us create a reference to the constructor. this will create one implementation.
Input.prototype.getNote = function(str) {
  let regex = /\b[A-Z]\w*/gi;
  let strTest = regex.test(str);
  return strTest ? str : errorHandler();
};

function errorHandler(err) {
  // throw new Error(err);
  console.log('invaled note');
}
module.exports = Input;
