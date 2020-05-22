'use strict';

// object literal
const notes = {};

notes.execute = function(msgs) {
  if (msgs.payload && msgs.action) {
    this.add(msgs.payload);
  } else {
    console.log(
      'Unvaild Command... try $ node notes.js [-a || --add] \'<any note>\' ');
    console.log('the action should be add, a, A, Add or ADD');
  }
};

/**
 * sending the note and id
 * @param {string} str
 * @param {Number} id
 */

notes.add = function(payload) {
  this.id = Math.ceil(Math.random() * 1000);
  console.log('the note is', payload, ' and the Id =', this.id);
};

module.exports = notes;
