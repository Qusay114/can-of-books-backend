const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/books',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const BookSchema = new mongoose.Schema({
  name:String,
  description:String,
  status:String,
});

const UserSchema = new mongoose.Schema({
  email:String,
  books:[BookSchema],
});

const UserModel = mongoose.model('user' , UserSchema);

module.exports = UserModel ;
