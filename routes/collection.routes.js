const express = require('express');
const { savePhotoToCollection } = require('../controllers/collectionController');

const router = express.Router();

router.post('/', savePhotoToCollection);

module.exports = router;
