'use strict';

const minimist = require('minimist');
const Input = require('../lib/input.js');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    a: 'here we go',
  };
});

describe('INPUT MODULE', () => {
  describe('getAction()', () => {
    it('uses the right action when specified', () => {
      const options = new Input();
      options.action = 'a'|| 'add' || 'list' || 'delete';
      expect(options.getAction('add')).toBeTruthy();
      expect(options.getAction('a')).toBeTruthy();
      expect(options.getAction('list')).toBeTruthy();
      expect(options.getAction('delete')).toBeTruthy();
    });
    it('return true when the action is valied', () => {
      const options = new Input();
      options.payload = 'hello';
      options.action = 'a'|| 'add' || 'list' || 'delete';
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
      options.payload = 'hello';
      options.action = 'a'|| 'add' || 'list' || 'delete';
      expect(options.valid()).toBeTruthy();
    });
  });
});

//t