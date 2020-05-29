'use strict';

const noteSchema = require('./notes-schema.js');

class Module{
  create(obj){
    let newNote = new noteSchema(obj);
    return  newNote.save();
  }
  read(category){
    if(category){
      return  noteSchema.find({category: category});
    }else{ 
      return  noteSchema.find({});
    }
  }
  // update(_id, obj){
  //   return noteSchema.findByIdAndUpdate(_id,obj,{new:true});
  // }
  delete(_id){
    return noteSchema.findByIdAndDelete({_id: _id});
  }
}

module.exports = Module;