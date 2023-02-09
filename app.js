const express = require('express');
const config = require('config');
const {usuario,dbName,password} = config.get("services.nasa");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
var cors = require('cors')

//const marsRouter = require('./src/routes/mars');
//const neoRouter = require('./src/routes/neo');
const app = express();
const LugaresRoutes= require('./src/routes/LugaresRoutes')

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/lugares', LugaresRoutes);

const mongoose = require('mongoose');
//const usuario = "turismo"
//const password = "3Yc56QiySp0VaqRO"
//const dbName = "Turismo"

mongoose.set('strictQuery', true);
const uri = `mongodb+srv://${usuario}:${password}@cluster0.aqk7w7k.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))


  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
  });

module.exports=app;

