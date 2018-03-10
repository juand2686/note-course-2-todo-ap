var mongoose = require('mongoose');

mongoose.Promese = global.Promese;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/TodoApp');

module.exports = {mongoose};