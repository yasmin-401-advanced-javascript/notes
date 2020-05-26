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