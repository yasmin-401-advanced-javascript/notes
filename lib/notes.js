const notes = {};

notes.execute = function(msg) {
  console.log(msg.action);
  if (msg.action === 'add' ||msg.action === 'a') {
    this.add(msg.payload);
  } else {
    console.log(
      '$ -a || --add < any note > ' , msg.action);
    console.log('the action should be add or a');
  }
};

/**
 * sending the note and id
 * @param {string} str
 * @param {Number} id
 */

notes.add = function(payload) {
  this.id = Math.ceil(Math.random() * 1000);
  console.log('the note is', payload, ' and the Id =', this.id);
};

module.exports = notes;
// 'use strict';
// require('dotenv').config();


// const mongoose = require('mongoose');
// const MONGODB_URI = process.env.MONGODB_URI;
// const SchemaFile = require('./model/notes-schema.js');
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// class Note {
//   constructor(notey){
//     this.action=notey.action;
//     this.category=notey.category;
//     this.payload=notey.payload;
//     this.id=notey.id;
//     // this.execute();
//     // console.log(this);
//     // mongoose.disconnect();
//   }
//   execute(obj) {
//     if (this.action === 'add' || this.action === 'a') {
//       return this.save(obj);
//     }else if(this.action === 'list'){
//       return this.list(obj);
//     } else if(this.action === 'delete'){
//       return this.deleteN(obj);
//     }
//   }
//   // console.log('hi',saved);
//   async save(obj){
//     let saved={
//       category:this.category,
//       payload:this.payload,
//     };
//     const note = new SchemaFile(saved);
//     await note.save();
//     console.log('saved note is ', note);
//     mongoose.disconnect();
//   }
      
   
    

//   async list(){
//     const allNote = await SchemaFile.find({});
//     console.log('All Note', allNote );
//     mongoose.disconnect();
//   }
  
    

    

//   async deleteN(){
//     await SchemaFile.deleteOne({});
//     mongoose.disconnect();
//   }
// }
  
 


// module.exports = Note;
