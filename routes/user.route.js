const express = require('express');
const { createNewUser, getSearchHistory } = require('../controllers/user.controller');

const router = express.Router();

router.post('/', createNewUser);
router.get('/searchHistory', getSearchHistory);

module.exports = router;
