const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    email: String,
    phone: Number,
    gender: String,
    userType:String
});

module.exports = mongoose.model('User', adminSchema);