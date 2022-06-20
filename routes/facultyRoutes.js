const express = require('express');
const path = require('path');
const facultyController = require('./../controllers/facultyController');

const router = express.Router();

router.post('/login', facultyController.login);
router.post('/register', facultyController.register);

module.exports = router;