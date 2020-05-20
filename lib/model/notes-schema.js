/* eslint-disable indent */
'use strict';
const mongoose = require('mongoose');
const notes = new mongoose.Schema({
    str: { type: 'string', required: true },
    category: { type: 'string', required: true },
});
module.exports = mongoose.model('notes', notes);