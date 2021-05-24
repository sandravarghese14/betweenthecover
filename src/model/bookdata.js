const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/book');
const Schema = mongoose.schema;

const BookSchema = new Schema({
    ibn:Number,
    title:String,
    author:String,
    language:String,
    genre:String,
    cover_image:String


});




var bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;