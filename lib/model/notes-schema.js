/* eslint-disable indent */
'use strict';
const mongoose = require('mongoose');
const notes = new mongoose.Schema({
    Category: { type: 'string', required: true },
    addMessege: { type: 'string', required: true },
});
module.exports = mongoose.model('notes', notes);