const express = require('express');
const router = express.Router();

const meCourseController = require('../app/controllers/meCourseController');

// [GET] /me/stored/courses
router.get('/stored/courses', meCourseController.index);

// [GET] /me/trash/courses
router.get('/trash/courses', meCourseController.trashCourses);


module.exports = router;