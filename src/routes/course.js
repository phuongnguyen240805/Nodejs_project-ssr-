const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseController');

// get: /course/:slug
router.get('/:slug', courseController.detail);

// get: /course/:id/edit
router.get('/:id/edit', courseController.edit);

// put: /course/:id
router.put('/:id', courseController.update);

// get: /course
router.get('/', courseController.index);


module.exports = router;