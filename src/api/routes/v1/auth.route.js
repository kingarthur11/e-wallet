const express = require('express');
const validate = require('express-validation');
const {
    login,
    register,
  } = require('../../validation/auth.validation');
const authController = require('../../controller/auth.controller');

const router = express.Router();

router.post('/register', validate(register), authController.register);
router.post('/login', validate(login), authController.login);

module.exports = router;
