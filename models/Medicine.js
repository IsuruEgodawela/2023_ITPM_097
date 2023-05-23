const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  Generic_Name: {
    type: String,
    required: true,
  },
  Drug_Class: {
    type: String,
    required: true,
  },
  Drug_Strength: {
    type: String,
    required: true,
  },
  Dosing_infomation: {
    type: String,
  },
  published_date: {
    type: Date,
  },
  Quantity: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Medicine = mongoose.model('medicine', MedicineSchema);
