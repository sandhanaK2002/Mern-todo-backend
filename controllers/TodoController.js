const Todo = require("../Models/TodoModel");

// Get all todos (Read)
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// // Get a single todo by ID
// exports.getTodoById = async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     if (!todo) {
//       return res.status(404).json({ error: 'Todo not found' });
//     }
//     res.json(todo);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// Create a new todo (Create)
exports.createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400).json({ message: "Bad request" });
    }
    const newTodo = new Todo({
      text,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update a todo by ID (Update)
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    if (!text || !id) {
      res.status(400).json({ message: "Bad request" });
    }
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a todo by ID (delete)
exports.deleteTodo = async (req, res) => {
  try {
    const {id} =  req.params
    if (!id) {
      res.status(400).json({ message: "Bad request" });
    }
    const deletedTodo = await Todo.findByIdAndRemove(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
