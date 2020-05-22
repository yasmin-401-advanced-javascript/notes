'use strict';

class Note {
  execute(msgs) {
    if (msgs.payload && msgs.action) {
      this.add(msgs.payload);
    } 
    else if (!msgs.action) {
      console.log('Invaild action try to use add,ADD,Add,A or a' );
    }if (!msgs.payload){
      console.log('invalid note');
    }
  }

  add(payload) {
    this.id = Math.ceil(Math.random() * 1000);
    console.log('the note is', payload, ' and the Id =', this.id);
  }

}

module.exports = Note;