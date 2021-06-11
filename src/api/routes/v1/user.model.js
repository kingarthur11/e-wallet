const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  lastname: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
  },
  confirm_password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
  },
  reset_password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
  },
  reset_passwordexpires: {
    type: Date,
  },

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;