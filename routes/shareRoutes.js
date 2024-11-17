const express = require('express');
const shareController = require('../controllers/shareController');
const router = express.Router();

router.get('/shares', shareController.getAvailableShares);

module.exports = router;
