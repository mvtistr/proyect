const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/auth.middleware.js');

const {
  loginController,
  registerController,
  deleteUserController,
  updateUserController
} = require('../controllers/auth.controller.js');

router.post('/register', registerController);
router.post('/login', loginController);

router.put('/user/:id', verifyToken, updateUserController);
router.delete('/user/:id', verifyToken, deleteUserController);

module.exports = router;