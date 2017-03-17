var $production = (process.env.NODE_ENV === "production")

module.exports = require('./config/webpack.' + ($production ? "prod" : "dev") + '.config') 
