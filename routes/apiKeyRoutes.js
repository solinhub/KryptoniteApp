const express = require('express');
const { ApiKeyController } = require('../controllers/apiKeyController');
const router = express.Router();

router.post('/generate', ApiKeyController.generate);
router.post('/invalidate', ApiKeyController.invalidate);

module.exports = router;