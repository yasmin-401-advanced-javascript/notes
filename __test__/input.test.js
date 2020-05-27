'use strict';

const minimist = require('minimist');
const Input = require('../lib/input.js');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    action:'add',
    payload: 'here we go',
  };
});

describe('INPUT MODULE', () => {
  describe('getAction()', () => {
    it('uses the right action when specified', () => {
      const options = new Input();
      options.payload = 'hello';
      options.action = 'a'|| 'add' || 'list' || 'delete';
      expect(options.valid('add')).toBeTruthy();
      expect(options.valid('a')).toBeTruthy();
      expect(options.valid('list')).toBeTruthy();
      expect(options.valid('delete')).toBeTruthy();
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
      options.payload = null;
      expect(options.valid()).toBeUndefined();
      expect(options.valid()).toBeFalsy();
    });
    it('return undefined when note is invalid', () => {
      const options = new Input();
      options.payload = 555;
      expect(options.valid()).toBeUndefined();
      expect(options.valid()).toBeFalsy();
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