const express = require('express');
const Lugares = require('../models/Lugares');
const router = express.Router();


router.get('/dos', async (req, res)=>{
    try{
        const arrayLugares = await (Lugares).find();
        console.log(arrayLugares)
        return res.send(arrayLugares)
    }catch (error){
        console.log(error)
    }
})

module.exports = router;