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
// data.save(trying);

function help() {
  console.log('hello');
  process.exit();
}
// data.execute(trying);
// data.add(trying);
// data
//   .save(trying);
// .then(() => data.list(trying))
// .then(() => data.delete(trying))
// .then(mongoose.disconnect);

const doDataStuff = async (noteItem) => {
  let note = new Notes(noteItem);

  await note.save();
  console.log('this is ', note);
  let oneNote = await note.findById(note.id);
  console.log('this is id ', oneNote);
  let allNote = await note.find({});
  console.log('this is all ', allNote);
  mongoose.disconnect();

};

let noteItem = {
  str: 'do your labs',
  Category: 'school',
};
doDataStuff(noteItem);
