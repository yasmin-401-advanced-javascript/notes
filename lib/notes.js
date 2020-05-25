'use strict';
require('dotenv').config();
const SchemaFile = require('./model/notes-schema.js');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class Note {
  constructor(notey){
    this.action=notey.action;
    this.category=notey.category;
    this.payload=notey.payload;
    this.id=notey.id;
    this.execute();
    // console.log(this);
    // mongoose.disconnect();
  }
  execute() {
    if (this.action === 'add' || this.action === 'a') {
      let saved={
        category:this.category,
        payload:this.payload,
      };
      // console.log('hi',saved);
      let save=function(){
        const note = new SchemaFile(saved);
        note.save();
        console.log('saved note is ', note);
        // mongoose.disconnect();
      };
      save();
    }
    if(this.action === 'list'){

      let saved=async()=>{
        const allNote = await SchemaFile.find({});
        console.log('All Note', allNote );
        mongoose.disconnect();
      };
      saved();
    }

    if(this.action === 'delete'){

      let deleteN=async()=>{
        await SchemaFile.deleteOne({});
        mongoose.disconnect();
      };
      deleteN();
    }
  }
 
}

module.exports = Note;
