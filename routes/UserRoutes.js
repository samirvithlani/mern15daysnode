const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
router.get('/user',userController.getAllUsers)
router.post('/user',userController.createUser)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
router.post('/login',userController.loginUser)
router.get('/user/:id',userController.getUserById)
module.exports = router;