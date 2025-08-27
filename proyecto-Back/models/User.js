const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true },
  password: String,
  edad: Number,
  genero: String,
  objetivo: [String],
  condicion: [String],
  altura: Number,
  peso: Number
});

module.exports = mongoose.model('User', UserSchema);
