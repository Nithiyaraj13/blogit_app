const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogUserSchema = new Schema({
  blogId: { type: String },
  date: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  post: { type: String, required: true },
  userid: { type: String, required: true },
});

module.exports = mongoose.model('BlogUser', BlogUserSchema);
