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

function Input() {
  const argv = minimist(process.argv.slice(2));
  this.getAction(argv);
}
/**
 * validat the action
 * @param {string} action
 */
Input.prototype.getAction = function(argv) {
  var getAction = Object.keys(argv)[1];
  const vaildAction = /add|a/gi;
  let actionTest = vaildAction.test(getAction);
  console.log(actionTest);
  if(actionTest && !(Object.keys(argv).length > 2)){
    if(typeof (argv[getAction])=== 'string' || typeof (argv[getAction])=== 'number'){
      this.action = getAction;
      this.payload = argv[getAction];
    }else{
      errorHandler();
    }
  }else{
    errorHandlerAction();
  }

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
function errorHandlerAction() {
  console.log('invaled Action');
}
module.exports = Input;