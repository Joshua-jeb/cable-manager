const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  setTopBoxNumber: String,
  status: String,
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',
  },
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);

