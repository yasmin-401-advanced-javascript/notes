"use strict";

// object literal
const notes = {};

notes.execute = function(msgs) {
    if (msgs) {
        console.log("ADD :", msgs.action);
        console.log("payload:", msgs.str);
    } else {
        console.error(err);
    }
};

/**
 * sending the note and id
 * @param {string} str
 * @param {Number} id
 */

notes.add = function(addNote) {
    this.id = Math.ceil(Math.random() * 1000);
    console.log("the note is", addNote.str, " and the Id =", this.id);
};

module.exports = notes;