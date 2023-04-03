const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vetSchema = new Schema({

      code: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      severity: {
        type: String,
        required: true
      },
      tplan: {
        type: String,
        required: true
      },
      recovery: {
        type: String,
        required: true
      },
      rplan: {
        type: String,
        required: true
      },
      other: {
        type: String,
        required: true
      }

})

const Vet = mongoose.model('Vet', vetSchema);

module.exports = Vet;