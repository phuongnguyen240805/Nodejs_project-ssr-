const express = require('express');
const router = express.Router();

const meCourseController = require('../app/controllers/meCourseController');

// [GET] /me/stored/courses
router.get('/stored/courses', meCourseController.index);


module.exports = router;