const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const produceSchema = new mongoose.Schema({
  produce: String,
  units: Number,
  unitPrice: Number,
  picture: String
}, { timestamps: true });

const Produce = mongoose.model('Produce', produceSchema);

module.exports = Produce;
