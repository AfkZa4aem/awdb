var mongoose = require("mongoose");

var todoSchema = new.mongose.Schema({
  // name
  name: {
    type: String,
    required: "Name cannot be blank!"
  },
  // completed
  completed: {
    type: Boolean,
    default: false
  },
  // created_date
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Todo = mongose.model("Todo", todoSchema);

module.exports = Todo;
