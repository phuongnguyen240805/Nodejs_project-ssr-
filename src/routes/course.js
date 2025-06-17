const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseController');

// get: /course/:slug
router.get('/:slug', courseController.detail);

// get: /course
router.get('/', courseController.index);


module.exports = router;