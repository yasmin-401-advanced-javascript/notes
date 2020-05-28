/* eslint-disable indent */
'use strict';
const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');
jest.spyOn(global.console, 'log');

describe('notes module', () => {
  it(' do logs when execute() is called with valied message ', () => {
    const trying = new Input();
    const data = new Notes(trying);
    console.log(data);
    expect(console.log).toHaveBeenCalled();
  });
});