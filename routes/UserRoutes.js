const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
router.get('/user',userController.getAllUsers)

module.exports = router;