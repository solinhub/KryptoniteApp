const User = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');

class ApiKeyService {
  static async generateApiKey(userId) {
    const apiKey = uuidv4(); // Generate a UUID for the API key
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    user.apiKey = apiKey;
    await user.save();
    return apiKey;
  }

  static async invalidateApiKey(userId) {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    user.apiKey = null;
    await user.save();
  }
}

module.exports = { ApiKeyService };