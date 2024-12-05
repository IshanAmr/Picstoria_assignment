const express = require('express');
const { searchPhotos } = require('../controllers/photo.controller');
const { savePhotoToCollection } = require('../controllers/collectionController');
const { addTags, searchPhotosByTags } = require("../controllers/tag.controller");

const router = express.Router();

router.get('/search', searchPhotos);
router.post('/', savePhotoToCollection);
router.post('/:photoId/tags', addTags);
router.get('/tag/search', searchPhotosByTags);

module.exports = router;
