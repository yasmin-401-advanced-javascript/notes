/* eslint-disable indent */
'use strict';

const notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('notes module', () => {
  it(' dose nothing when execute() is called with invalied message ', () => {
    const newNote = new notes();
    newNote.render();
    expect(console.log).toHaveBeenCalled();
  });
});
