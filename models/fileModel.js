const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const fileSchema = new mongoose.Schema({
  fileId: {
    type: String,
    default: uuidv4, // Generate a UUID for each new file
    unique: true
  },
  filename: { type: String, required: true },
  data: { type: String, required: true }, // Base64 encoded string
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('File', fileSchema);