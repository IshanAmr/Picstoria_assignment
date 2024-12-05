const express = require('express');
const { searchPhotos } = require('../controllers/photo.controller');

const router = express.Router();

router.get('/search', searchPhotos);

module.exports = router;
