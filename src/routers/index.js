const express = require('express');

const router = express.Router();

const getMethods = require('./getMethods.route');
const postMethods = require('./postMethods.route');

router.use(getMethods);
router.use(postMethods);

module.exports = router;