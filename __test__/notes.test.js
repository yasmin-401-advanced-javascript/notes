/* eslint-disable indent */
'use strict';
const notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('notes module', () => {
  it(' do logs when execute() is called with valied message ', () => {
    const option = {action:'a' , payload: 'testing....'};
    notes.execute(option.action,option.payload);
    expect(console.log).toHaveBeenCalled();
  });
});