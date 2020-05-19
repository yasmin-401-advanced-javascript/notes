'use strict';

class Note {
  execute(msgs) {
    if (msgs) {
      this.render();
    }
  }

  add() {
    let addNote = 'hello';
    this.id = Math.ceil(Math.random() * 1000);
    console.log('the note is', addNote, ' and the Id =', this.id);
  }
  render(result) {
    console.log('is this?', result);
  }
}

module.exports = Note;
