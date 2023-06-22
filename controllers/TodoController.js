const Todo =  require("../Models/TodoModel")


// Get all todos (Read)
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
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
    const newTodo = new Todo({
      text,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a todo by ID (Update)
exports.updateTodo = async (req, res) => {
  try {
    
    const { text } = req.body;  
    console.log("body" + text)
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { text },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a todo by ID (delete)
exports.deleteTodo = async (req, res) => {
  try {
    
    const deletedTodo = await Todo.findByIdAndRemove(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


