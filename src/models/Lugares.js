const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lugaresSchema = new Schema({
    "img":String,
    "center":{"lat":Number,"lng":Number},
    "description":String,
    "title":String
})

const Lugares = mongoose.model('Lugares', lugaresSchema);

module.exports = Lugares;