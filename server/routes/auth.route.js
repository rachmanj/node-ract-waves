const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();
const Auth = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/signin', authController.signin);
router.get('/isauth', Auth(), authController.isauth);

module.exports = router;
