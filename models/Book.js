const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, default: 'Unknown' },
  dateFinished: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', bookSchema);