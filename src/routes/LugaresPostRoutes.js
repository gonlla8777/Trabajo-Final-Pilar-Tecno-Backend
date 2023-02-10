const express =require('express');
const router = express.Router();
const postLugaresController = require('../controllers/lugares.controller')

router.post('/', postLugaresController)
module.exports=router;