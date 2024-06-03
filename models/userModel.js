const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uuidv4, // Generate a UUID for each new user
    unique: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true // Ensure email is unique
  },
  password: { 
    type: String, 
    required: true 
  },
  apiKey: { 
    type: String, 
    default: uuidv4, // Generate a UUID for each new user's API key
    unique: true 
  },
});

// Pre-save hook to hash the password before saving the user
userSchema.pre('save', async function(next) {
  try {
    if (this.isModified('password') || this.isNew) {
      this.password = await bcryptjs.hash(this.password, 10);
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('User', userSchema);
