/* eslint-disable indent */
'use strict';

const minimist = require('minimist');
const Input = require('../lib/input.js');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    f: 'Add',
    str: 'hi',
  };
});

describe('INPUT MODULE', () => {
  describe('getAction()', () => {
    it('default to Add when its called with no action', () => {
      const options = new Input();
      expect(options.getAction()).toEqual('Add');
      expect(options.valid()).toBeFalsy();
    });
    it('default to Add when its called with invalid method', () => {
      const options = new Input();
      expect(options.getAction('yasmin')).toEqual('Add');
      expect(options.valid()).toBeFalsy();
    });
    it('uses the right action when specified', () => {
      const options = new Input();
      expect(options.getAction(options.action)).toEqual(options.action);
      expect(options.getAction('add')).toEqual('add');
      expect(options.getAction('a')).toEqual('a');
      expect(options.getAction('A')).toEqual('A');
      expect(options.getAction('Add')).toEqual('Add');
      expect(options.getAction('ADD')).toEqual('ADD');
    });
    it('return true when the action is valied', () => {
      const options = new Input();
      options.str = 'hello';
      expect(options.valid()).toBeTruthy();
    });
  });
  describe('getNote()', () => {
    it('return undefined when note is not specified', () => {
      const options = new Input();
      expect(options.getNote()).toBeUndefined();
      expect(options.valid()).toBeFalsy();
    });
    it('return undefined when note is invalid', () => {
      const options = new Input();
      expect(options.getNote('555')).toBeUndefined();
      expect(options.valid()).toBeFalsy();
    });
    it('return formatted note when note is provided', () => {
      const options = new Input();
      const str = options.str;
      expect(options.getNote(str)).toEqual(str);
    });
    it('return true when the note is valied', () => {
      const options = new Input();
      options.str = 'hello';
      expect(options.valid()).toBeTruthy();
    });
  });
});

//t
