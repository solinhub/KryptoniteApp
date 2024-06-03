const { FileService } = require('../services/fileService');

class FileController {
  static async upload(req, res) {
    try {
      const file = req.file;
      const apiKey = req.header('X-API-Key');
      if (!file || !apiKey) {
        return res.status(400).send('File and API key are required');
      }
      const uploadedFile = await FileService.uploadFile(apiKey, file);
      res.status(200).send(uploadedFile);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async getFile(req, res) {
    try {
      const file = await FileService.getFile(req.params.fileId);
      if (!file) {
        return res.status(404).send('File not found');
      }
      res.status(200).send(file);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async getAllFiles(req, res) {
    try {
      const files = await FileService.getAllFiles();
      res.status(200).send(files);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

module.exports = { FileController };