const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).json({ user });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  res.json({ user });
});

module.exports = {
  register,
  login,
};
