var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

// tell mongoose that we will use promises
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
