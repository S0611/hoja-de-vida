if(process.env.NODE_ENV !== "production" || process.env.NODE_ENV == "production"){
    require('dotenv').config({path: '.env'});
}

module.exports = {
    PORT: process.env.PORT
}