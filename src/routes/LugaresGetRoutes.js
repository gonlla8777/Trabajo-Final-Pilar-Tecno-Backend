/*
const express = require("express");
const router = express.Router();
const { json } = require("body-parser");

const {
  getLugaresController,
  postLugaresController,
  deletLugaresController,
} = require("../controllers/lugares.controller");

router.get("/dos", getLugaresController);
router.post("/dos", postLugaresController);
router.delete("/:id", deletLugaresController);
module.exports = router;
*/
/*
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
    const delet = await Lugares.findByIdAndRemove(value);
     return res.send();
    }catch (error){
        console.log(error)
    
   }});



*/
