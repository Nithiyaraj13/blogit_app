const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  id: { type: String },
  password: { type: String },
  phone: { type: String },
  isActive: { type: Boolean },
  name: { type: String },
  role: { type: String, enum: ['Admin', 'Customer'] },
}, {
  collection: 'users'
});
module.exports = mongoose.model('User', UserSchema);
