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
  // console.log('minimist()',process.argv);
  const argv = minimist(process.argv.slice(2));
  this.getAction(argv);
  // console.log(argv)
  
  // console.log('minimist()', getAction);
  // this.action = this.getAction(argv);
  // console.log(this.action)
  // this.payload = this.getNote(argv.a || argv.add);
  // console.log(this, 'here  we go');
}
/**
 * validat the action
 * @param {string} action
 */
Input.prototype.getAction = function(argv) {
//   let error = "the right action is a, add, A, ADD, Add ";
  var getAction = Object.keys(argv)[1];
  const vaildAction = /add|a/gi;
  // console.log('action :' , action);
  let actionTest = vaildAction.test(getAction);
  console.log(actionTest);
  if(actionTest && !(Object.keys(argv).length > 2)){
    if(typeof (argv[getAction])=== 'string' || typeof (argv[getAction])=== 'number'){
      this.action = getAction;
      this.payload = argv[getAction];
    // return getAction;
    }else{
      errorHandler();
    }
  }else{
    errorHandlerAction();
  }
  // return actionTest ?  action : errorHandlerAction();

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