const express = require('express');
const { savePhotoController } = require('../controllers/photo.controller'); 
const { addTagsController } = require('../controllers/tag.controller'); 

const router = express.Router();

router.post('/', savePhotoController);
router.post('/:photoId/tags', addTagsController);

module.exports = router;
