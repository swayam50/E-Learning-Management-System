const express = require('express');
const path = require('path');
const studentController = require('./../controllers/studentController');

const router = express.Router();

router.post('/login', studentController.login);
router.post('/register', studentController.register);

module.exports = router;