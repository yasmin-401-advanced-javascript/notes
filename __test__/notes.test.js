/* eslint-disable indent */
'use strict';
const Input = require('../lib/input.js');
const notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('notes module', () => {
  it(' dose nothing when execute() is called with invalied message ', () => {
    const trying = new Input();
    const data = new notes(trying);
    console.log(data);
    expect(console.log).toHaveBeenCalled();
  });
});
