const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const fileSchema = new mongoose.Schema({
  fileId: {
    type: String,
    default: uuidv4, 
    unique: true
  },
  filename: { type: String, required: true },
  data: { type: String, required: true }, 
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('File', fileSchema);