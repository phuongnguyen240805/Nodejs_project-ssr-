const express = require('express');
const router = express.Router();

const handleController = require('../app/controllers/handleController');

// get: /data_handle/create
router.get('/create', handleController.create);

// post: /data_handle/store
router.post('/store', handleController.store);

// get: /data_handle
router.get('/', handleController.index);


module.exports = router;