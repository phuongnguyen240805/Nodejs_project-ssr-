const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteController');

// get signup page
router.get('/signup', siteController.signup);

// get home page
router.get('/', siteController.index);


module.exports = router;