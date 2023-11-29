const mongoose = require('mongoose');
//Model Schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
//Model
const User = mongoose.model('User', userSchema);

module.exports.User = User