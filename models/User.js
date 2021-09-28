const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  list: [Number],
  date: {
    type: Date,
    default: Date.now
  }
});

// MongoDB will contain a collection named videotheque_users
module.exports = mongoose.model('cinematheque_user', UserSchema);