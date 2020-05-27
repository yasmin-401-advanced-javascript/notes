'use strict';
require('dotenv').config();


const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
const SchemaFile = require('./model/notes-schema.js');
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
class Note {

  execute(obj) {
    if (obj.action === 'add' || obj.action === 'a') {
      this.save(obj);
    }else if(obj.action === 'list'){
      this.list(obj);
    } else if(obj.action === 'delete'){
      this.deleteN(obj);
    }
  }
  async save(obj){
    let saved={
      text:obj.payload,
      category:obj.category,
    };
    const note = new SchemaFile(saved);
    await note.save();
    console.log('saved note is ', note.text);
    mongoose.disconnect();
  }
  async list(obj){
    if(typeof(obj.payload) ==='boolean' ){
      const allNote = await SchemaFile.find({});
      allNote.forEach(val=>{
        console.log(`${val.text}
        category : ${val.category}     id : ${val.id}
-------------------------------------------------------------------`);
      });
      mongoose.disconnect();

    }else{
      const oneCategory = await SchemaFile.find({category: obj.payload});
      oneCategory.forEach(val=>{
        console.log(`${val.text}
        category : ${val.category}     id : ${val.id}
-------------------------------------------------------------------`);
      });
      mongoose.disconnect();
    }
  }
  async deleteN(obj){
    try{
      await SchemaFile.findOneAndDelete({_id:obj.payload});
      mongoose.disconnect();
    }catch(e){
      console.log('invalied Id');
      mongoose.disconnect();
    }
  }
}
module.exports = Note;
