'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const trying = new Input();
const data = new Notes(trying);
console.log(data);


