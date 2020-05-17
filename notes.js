'use strict';

const Input = require('./lib/input.js');
const notes = require('./lib/notes.js');

const trying = new Input();
notes.execute(trying);
notes.add(trying);