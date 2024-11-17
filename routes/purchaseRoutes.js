const express = require('express');
const purchaseController = require('../controllers/purchaseController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/purchase', auth.authenticateToken, purchaseController.purchaseShare);

module.exports = router;
