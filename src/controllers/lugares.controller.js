const saveLugare = require("../services/lugar.service")
//const url ="http://localhost:3001/nuevolugar"

async function postLugaresController(req,res,next){
    try{
        const data = req.body
        console.log(data)
        const lugares= await saveLugare(data);
       res.json(lugares);
       console.log(lugares)
    }catch(error){
        next(error);
    }
}

module.exports= postLugaresController;