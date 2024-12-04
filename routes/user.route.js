const express = require('express');
const { createNewUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/', createNewUser);

module.exports = router;
