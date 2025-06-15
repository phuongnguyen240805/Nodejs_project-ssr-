const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteController');

// get signup page
router.use('/signup', siteController.signup);

// get home page
router.use('/', siteController.index);


module.exports = router;