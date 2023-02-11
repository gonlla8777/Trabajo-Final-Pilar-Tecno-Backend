/*
const Lugares = require("../models/Lugares");

async function getLugare() {
  try {
    const arrayLugares = await Lugares.find({});
    console.log(arrayLugares);
    return arrayLugares;
  } catch (error) {
    console.log(error);
  }
}

async function saveLugare(value) {
  try {
    const lugares = await Lugares.findByIdAndRemove(value);
    console.log(lugares);
    return lugares.save();
  } catch (error) {
    console.log(error);
  }
}
async function deleteLugare(data) {
  try {
    const lugares = await Lugares.findByIdAndDelete(data);
    console.log(lugares);
    return res.send();
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getLugare, saveLugare, deleteLugare };

*/
