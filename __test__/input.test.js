'use strict';

const minimist = require('minimist');
const Input = require('../lib/input.js');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    f: 'add',
    str: 'hi',
  };
});

describe('INPUT MODULE', () => {
  describe('getAction()', () => {
    it('default to Add when its called with invalid method', () => {
      const options = new Input();
      expect(options.getAction('add')).toEqual('add');
    });
    it('uses the right action when specified', () => {
      const options = new Input();
      expect(options.getAction(options.action)).toEqual(options.action);
      expect(options.getAction('add')).toEqual('add');
      expect(options.getAction('a')).toEqual('a');
    });

  });
  describe('getNote()', () => {
    it('return undefined when note is not specified', () => {
      const options = new Input();
      expect(options.getNote()).toBeUndefined();
    });
    it('return undefined when note is invalid', () => {
      const options = new Input();
      expect(options.getNote('555')).toBeUndefined();
    });
    it('return formatted note when note is provided', () => {
      const options = new Input();
      const payload = options.payload;
      expect(options.getNote(payload)).toEqual(payload);
    });

  });
});

//t