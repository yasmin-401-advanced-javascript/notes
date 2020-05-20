'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const Notess = require('./lib/notes.js');
const Notes = require('./lib/model/notes-schema.js');
const mongoose = require('mongoose');
const MONGODB_URI =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/notes';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const trying = new Input();
// const data = new Notess();

// trying.valid() ? data.execute(trying).then(mongoose.disconnect) :help() ;


// function help() {
//   console.log('hello');
//   process.exit();
// }
// data.execute(trying);
// data.add(trying);
// data.save(trying);


const doDataStuff = async (noteItem) => {
  let note = new Notes(noteItem);

  await note.save();
  console.log('this is ', note); // this will contain the note & the category
  let oneNote = await Notes.findById(note.id);
  // we used the Notes here because we want to referred  to the Food module (schema file)  
  console.log('this is id ', oneNote); // this will return the last note in the database
  let allNote = await Notes.find({});
  console.log('this is all ', allNote); // this will return all the data in the database
  mongoose.disconnect();

};

let noteItem = {
  str: 'do your labs',
  category: 'school',
};
doDataStuff(noteItem);
