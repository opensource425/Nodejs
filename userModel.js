const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    collation: { locale: 'en', strength: 2 }
  },
  password: {
    type: String
  },
  type: {
    type: String
  },
  user_token: {
    type: String
  },
  reset_password_token: {
    type: String
  },
  locked: {
    type: Boolean,
    default: false
  },
  lockedAt: {
    type: Date,
    default: null
  },
  failedLoginAttempts: {
    type: Number,
    default: 0
  },
  forgotLinkTime: {
    type: String
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  },
  approve: {
    type: Boolean,
    default: false
  },
  action_applied: {
    type: Boolean,
    default: false
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  last_activity: {
    type: Date,
    default: null
  },
  enabled: {
    type: Boolean,
    default: false
  },
  is_temp_password: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    default: "unassigned"
  },
  login_count_with_temp_password: {
    type: Number,
    default: 0
  },
  profile_img: {
    type: String,
    default: null
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;