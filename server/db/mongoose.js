var mongoose = require('mongoose');

mongoose.Promese = global.Promese;

mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};