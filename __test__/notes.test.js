/* eslint-disable indent */
'use strict';
require('@code-fellows/supergoose');
const Notes = require('../lib/notes.js');
jest.spyOn(global.console, 'log');

describe('notes module', () => {
  it(' create() to add new note to the database ', () => {
    let obj={
      action:'add',
      payload:'hello test',
      category:'test',
    };
    const notes = new Notes();
    return notes.execute(obj)
    .then(data =>{
      expect(data.text).toEqual(obj.payload);
      expect(data.category).toEqual(obj.category);

    });
  });
//   it(' read() to get specific category notes form database ', () => {
//     let list={
//       action:'list',
//       payload: 'test',
//     };
//     const notes = new Notes();
//     return notes.execute(list)
//     .then(data =>{
//       expect(Array.isArray(data)).toBe(true);
//     });
// });
// it(' read() to get all notes form database ', () => {

//   let obj={
//     action:'list',
//     payload: true,
//   };
//   const notes = new Notes();
//   return notes.list(obj)
//   .then(data =>{
//     expect(Array.isArray(data)).toBe(true);
//   });
// });
it(' delete() to delete note from the database ', () => {
  let obj={
    action:'delete',
    payload: '5ecfc0f6d7a6d519e837899f',
  };
  const notes = new Notes();
  return notes.execute(obj)
  .then(data =>{
      expect(data).toBeUndefined();
      expect(console.log.mock.calls.length).toBe(1);
      expect(console.log.mock.calls[0][0]).toBe('invalied Id');

});
});
});