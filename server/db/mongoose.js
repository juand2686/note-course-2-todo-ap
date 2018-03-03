var mongoose = require('mongoose');

mongoose.Promese = global.Promese;

mongoose.connect('mongodb://localhost/TodoApp');

module.exports = {mongoose};