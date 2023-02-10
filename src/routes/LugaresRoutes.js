const { json } = require('body-parser');
const express = require('express');
const Lugares = require('../models/Lugares');
const router = express.Router();


router.get('/dos', async (req, res,next)=>{
    try{
        const arrayLugares = await (Lugares).find();
        console.log(arrayLugares)
        return res.json(arrayLugares),
        next()
    }catch (error){
        console.log(error)
    }
})

router.post('/dos', async (req, res, next)=>{
    try{
        const data = req.body
        console.log(data)
        const lugares = new Lugares(data);
        console.log(lugares)
        return lugares.save(),
        next
    }catch(error){
        next(error);
    }
})

router.delete('/:id', async (req, res) => {
   try{ 
    const value = req.params.id
    console.log(value)
    console.log(value)
    console.log(value)
    const delet = await Lugares.findByIdAndRemove(value);
     return res.send();
    }catch (error){
        console.log(error)
    
   }});




module.exports = router;