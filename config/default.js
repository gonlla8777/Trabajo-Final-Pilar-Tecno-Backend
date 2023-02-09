require("dotenv").config();
module.exports = {
    services:{
        nasa:{
            usuario : "turismo",
            password : "3Yc56QiySp0VaqRO",
            dbName : "Turismo",
            hostname: "https://api.nasa.gov",
            apod_path: "/neo/rest/v1/feed",
            apod_path_mars: "/mars-photos/api/v1/manifests/",
            api_key: process.env.API_KEY,
        }
    }    
}

