const express = require('express');
const config = require('config');
//const {usuario,dbName,password} = config.get("services.nasa");
const path = require('path');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
const logger = require('morgan');
require('dotenv').config();
require('./src/services/services')
var cors = require('cors')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const LugaresRoutes= require('./src/routes/LugaresRoutes')
const LugaresPostRoutes= require('./src/routes/LugaresPostRoutes')

app.use(express.urlencoded({extended:true}))
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }))

app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/lugares', LugaresRoutes);
app.use('/', LugaresPostRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`serve at http://localhost:${port}`);});

module.exports=app;

