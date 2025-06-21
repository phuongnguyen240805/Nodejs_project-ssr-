const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseController');

// get: /course/:slug
router.get('/:slug', courseController.detail);

// get: /course/:id/edit
router.get('/:id/edit', courseController.edit);

// post: /course/handle-actions-form
router.post('/handle-actions-form', courseController.handleActionsForm);

// patch: /course/:id/restore
router.patch('/:id/restore', courseController.restore);

// delete: /course/:id/force
router.delete('/:id/force', courseController.forceDelete);

// put: /course/:id
router.put('/:id', courseController.update);

// delete: /course/:id
router.delete('/:id', courseController.destroy);

// get: /course
router.get('/', courseController.index);


module.exports = router;