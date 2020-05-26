'use strict';

// object literal
const notes = {};
if()
notes.execute = function(msg) {
  console.log(msg.action);
  if (msg.action === 'add' ||msg.action === 'a') {
    this.add(msg.payload);
    console.log(msg.payload);
  } else {
    console.log(
      '$ -a || --add < any note > ' , msg.action);
    console.log('the action should be add or a');
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
