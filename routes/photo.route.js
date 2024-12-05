const express = require('express');
const { searchPhotos } = require('../controllers/photo.controller');
const { savePhotoToCollection } = require('../controllers/collectionController');
const { addTags } = require("../controllers/tag.controller");

const router = express.Router();

router.get('/search', searchPhotos);
router.post('/', savePhotoToCollection);
router.post('/:photoId/tags', addTags);

module.exports = router;
