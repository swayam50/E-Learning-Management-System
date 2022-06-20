const express = require('express');
const path = require('path');
const facultyRouter = require('./facultyRoutes');
const studentRouter = require('./studentRoutes');
const mainController = require('./../controllers/mainController');

const router = express.Router();

router.get('/', mainController.index);
router.get('/entry', mainController.entry);

router.use('/student', studentRouter);
router.use('/faculty', facultyRouter);

module.exports = router;