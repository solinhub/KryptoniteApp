const base64Img = require('base64-img');
const File = require('../models/fileModel');
const User = require('../models/userModel');

class FileService {
  static async uploadFile(apiKey, file) {
    const user = await User.findOne({ apiKey });
    if (!user) {
      throw new Error('Invalid API key');
    }
    const base64Data = await base64Img.base64_encode(file.path);
    const newFile = new File({ filename: file.originalname, data: base64Data, owner: user._id });
    await newFile.save();
    return newFile;
  }

  static async getFile(fileId) {
    return File.findById(fileId);
  }

  static async getAllFiles() {
    return File.find();
  }
}

module.exports = { FileService };