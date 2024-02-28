const mongoose = require('mongoose');

const { Schema } = mongoose;


const CommentSchema = new Schema({

  username: { type: String },

  comment: { type: String }

}, { _id: false });

 

const BlogSchema = new Schema({

//   blogId: { type: String, required: true },

//   date: { type: Date, required: true },

  title: { type: String},

  category: { type: String},

//   author: { type: String, required: true },
comments_users: [CommentSchema], 

  image: { type: String },

  content: { type: String},
  createdAt: { type: Date, default: Date.now }, // Store the creation date and time
  date: { type: String }

}, { timestamps: true }); 
BlogSchema.pre('save', function (next) {
  this.date = this.createdAt.toISOString().split('T')[0];
  next();
});


 

module.exports = mongoose.model('NewBlog', BlogSchema);