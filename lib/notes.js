'use strict';
const superagent = require('superagent');
const SchemaFile = require('./model/notes-schema.js');
class Note {
  execute(msgs) {
    if (msgs) {
      return superagent(msgs.action, msgs.str)
        .then(this.render)
        .then(() => this.save(msgs));
    }
  }

  add(msgs) {
    console.log('Add note:' , msgs.str , msgs.action);
  }
  render(result) {
    console.log('is this?', result);
  }

  async save(msgs) {
    const record = new SchemaFile(msgs);
    const saved = await record.save();
    console.log('seved' , saved);
    return saved;
  }
}

module.exports = Note;
