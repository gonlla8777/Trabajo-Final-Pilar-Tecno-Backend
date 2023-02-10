const Lugares = require("../models/Lugares")

async function saveLugare(data){
    try{
        const lugar = new Lugares(data);
        await lugar.save();
        console.log(lugar)
        return{
            operation:"OK",
            
        } 
    }catch(error){
        throw(error)
    }
 }

 module.exports= saveLugare;
