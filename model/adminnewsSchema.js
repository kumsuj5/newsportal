const mongoose = require("mongoose");

const adminnewsSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    details:String,
    location:String,
    name:String
})

module.exports = mongoose.model('Newsportal',adminnewsSchema);