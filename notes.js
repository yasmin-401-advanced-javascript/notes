'use strict';



const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const trying = new Input();
const data = new Notes(trying);
data.execute(trying);
// console.log(data);
