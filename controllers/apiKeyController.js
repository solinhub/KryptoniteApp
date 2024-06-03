const { ApiKeyService } = require('../services/apiKeyService');

class ApiKeyController {
  static async generate(req, res) {
    try {
      const { userId } = req.body;
      const apiKey = await ApiKeyService.generateApiKey(userId);
      res.status(200).send({ apiKey });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async invalidate(req, res) {
    try {
      const { userId } = req.body;
      await ApiKeyService.invalidateApiKey(userId);
      res.status(200).send('API key invalidated');
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

module.exports = { ApiKeyController };
