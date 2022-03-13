const express = require('express');
const router = express.Router();

router.use(require('./api/searchRoutes'));
router.use(require('./html/htmlRoutes'));

module.exports = router;