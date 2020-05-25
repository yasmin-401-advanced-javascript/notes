/* eslint-disable indent */
'use strict';
const notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('notes module', () => {
  it(' do logs when execute() is called with valied message ', () => {
    const note = new notes({
      action:'add',
      payload:'test note',
  });
  note.execute();
    expect(console.log).toHaveBeenCalled();
  });
});
