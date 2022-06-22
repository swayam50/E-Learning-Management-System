const express = require('express');
const apiController = require('./../controllers/apiController');

const router = express.Router();

router.post('/register', apiController.register);

module.exports = router;