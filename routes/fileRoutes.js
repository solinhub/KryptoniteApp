const express = require('express');
const multer = require('multer');
const { FileController } = require('../controllers/fileController');
const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/upload', upload.single('file'), FileController.upload);
router.get('/file/:fileId', FileController.getFile);
router.get('/files', FileController.getAllFiles);

module.exports = router;