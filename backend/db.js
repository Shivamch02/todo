const mongoose = require("mongoose");

const Todo = mongoose.Schema({
  id: String,
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("Todo", Todo);

module.exports = TodoModel;
