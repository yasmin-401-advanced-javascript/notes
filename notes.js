'use strict';
require('dotenv').config();
// const Input = require('./lib/input.js');
const Notess = require('./lib/notes.js');
// const schema =require('./lib/model/notes-collection.js')

const mongoose = require('mongoose');
const Notes = require('./lib/model/notes-schema.js');
// const MONGODB_URI = 'mongodb://localhost:27017/notes';
const MONGODB_URI = process.env.MONGODB_URL || 'mongodb://localhost:27017/notes';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const doDataStuff = async (noteItem) => {
  // let noteItem = {
  //   Category: 'school',
  //   addMessege: 'alben y6osha',
  // };
  let note = new Notes(noteItem);
  
  await note.save();
  console.log('this is ', note);
  let oneNote = await Notes.findById(note.id);
  console.log('this is id ', oneNote);
  let allNote = await Notes.find({});
  console.log('this is all ', allNote);
  mongoose.disconnect();
  
};

let noteItem = {
  Category: 'school',
  addMessege: 'alben y6osha',
};
// const trying = new Input();

const data = new Notess();
data.execute();
// data.add();
doDataStuff(noteItem);