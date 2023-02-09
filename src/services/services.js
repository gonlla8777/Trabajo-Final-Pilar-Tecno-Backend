/*const mongoose = require('mongoose');
const config = require('config');
const {uri} = config.get("services.nasa");
function mongooseConect (){

  
  mongoose.set('strictQuery', true);
 
  mongoose.connect({uri}, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('conectado a mongodb')) 
    .catch(e => console.log('error de conexión', e))
  
  
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`serve at http://localhost:${port}`);
    });
}

module.export = mongooseConect;
*/