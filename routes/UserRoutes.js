const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
router.get('/user',userController.getAllUsers)
router.post('/user',userController.createUser)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
module.exports = router;