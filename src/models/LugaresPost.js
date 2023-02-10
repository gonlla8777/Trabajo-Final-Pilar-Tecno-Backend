const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lugaresPostSchema = new Schema({
    "img":String,
    "center":{"lat":Number,"lng":Number},
    "description":String,
    "title":String
})

const LugaresPost = mongoose.model('LugaresPost', lugaresPostSchema);

module.exports = LugaresPost;