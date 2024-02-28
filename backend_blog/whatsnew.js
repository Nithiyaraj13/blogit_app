const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({

  username: { type: String },

  comment: { type: String }

}, { _id: false });

const WhatsnewSchema = new Schema({
 // blogId: { type: String, required: true },
  //date: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  //author: { type: String, required: true },
  comments_users: [CommentSchema],
  image: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }, // Store the creation date and time
  date: { type: String } 
}, { timestamps: true }); 
WhatsnewSchema.pre('save', function (next) {
  this.date = this.createdAt.toISOString().split('T')[0];
  next();
});

module.exports = mongoose.model('Whatsnew', WhatsnewSchema);
