const {
  getLugare,
  saveLugare,
  deleteLugare,
} = require("../services/lugar.service");

async function getLugaresController(req, res, next) {
  try {
    let lugares = await getLugare();
    return res.json(lugares);
  } catch (error) {
    next(error);
  }
}

async function postLugaresController(req, res, next) {
  try {
    const data = req.body;
    console.log(data);
    let lugares = await saveLugare(data);
    return lugares.save(), next;
  } catch (error) {
    next(error);
  }
}

async function deletLugaresController(req, res, next) {
  try {
    const value = req.params.id;
    let lugares = await deleteLugare(value);
    return res.send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getLugaresController,
  postLugaresController,
  deletLugaresController,
};
