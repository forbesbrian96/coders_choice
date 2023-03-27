const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    artist: String,
    album: String,
    //released example: 1976
    released: Number,
    image: String,
})

const Records = mongoose.model('Records', recordSchema)

module.exports = Records