const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const TodoModel = require("./db");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://shivam0224:$Weety24@cluster0.rfwal8r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/todos"
);

app.get("/todos", async (req, res) => {
  const todos = await TodoModel.find();
  console.log(todos);
  res.send(todos);
});

app.post("/todos", async (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  const newTodo = await TodoModel.create({
    title,
    description,
  });
  res.send({ msg: "todo created successfully", todo: newTodo });
});

app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const updatedTodo = await TodoModel.findByIdAndUpdate(id, {
    title,
    description,
    status,
  });
  res.send({ msg: "todo updated successfully", todo: updatedTodo });
});

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  await TodoModel.findByIdAndDelete(id);
  res.send({ msg: "todo deleted successfully" });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
