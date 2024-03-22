const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  dob: {
    type: String
  },
  mobile: {
    type: String
  }
});

module.exports = User = mongoose.model('user', UserSchema);
