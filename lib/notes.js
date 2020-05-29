'use strict';
require('dotenv').config();

const moduleReq = require('./model/notes-collection.js');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  poolSize: 10,
  bufferMaxEntries: 0, 
  reconnectTries: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
class Note {

  execute(note) {
    if (note.action === 'add' || note.action === 'a') {
      return this.post(note);
    }else if(note.action === 'list'){
      return this.list(note);
    } else if(note.action === 'delete'){
      return this.deleteN(note);
    }
  }
  async post(note){
    let savedObj={
      text:note.payload,
      category:note.category,
    };
    const savedNote =  new moduleReq();
    let newNote = await savedNote.create(savedObj);
    console.log('your note is :' , newNote.text);
    mongoose.disconnect();
    return newNote;
  }
  async list(note){
    const module = new moduleReq();
    if(typeof(note.payload) ==='boolean' ){
      let allNotes = await module.read();
      allNotes.forEach(val=>{
        console.log(` text : ${val.text}
        category : ${val.category}     id : ${val.id}
-------------------------------------------------------------------`);
      });

      mongoose.disconnect();
      return allNotes;
    }else{
      let listWithCategeroy = await module.read(note.payload);
      listWithCategeroy.forEach(val=>{
        console.log(`text : ${val.text}
        category : ${val.category}     id : ${val.id}
-------------------------------------------------------------------`);
      });
      mongoose.disconnect();
      return listWithCategeroy;
    }
  }
  async deleteN(note){
    try{
      let deleteNote = new moduleReq();
      let deletedNote = await deleteNote.delete(note.payload);
      console.log('your note is successfully deleted, Have a good day!');
      mongoose.disconnect();
      return deletedNote;
    }catch(e){
      console.log('invalied Id');
      mongoose.disconnect();
    }
  }
}
module.exports = Note;