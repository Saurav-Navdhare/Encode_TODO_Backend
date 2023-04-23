const todoSchema = require('../models/todoSchema'); // importing todoSchema

const todoAdd = async (req, res) => {
    const { title } = req.body;           // both are same
    // const title = req.body.title;
    const newTodo = new todoSchema({    // creating new todo
        title
    });
    try {                            // try catch block  
        const todo = await newTodo.save();  // saving todo
        res.status(200).json({ todo });    // sending response
    }
    catch (err) {                    // if error occurs
        console.log(err);
        res.status(500).json({ msg: err.message })    // sending error message
    }
}

const todoGet = async (req, res) => {  // get all todos
    try {
        const todos = await todoSchema.find();  // finding all todos
        res.status(200).json({ todos });  // sending response
    }
    catch (err) {
        console.log(err);   // if error occurs
        res.status(500).json({ msg: err.message })    // sending error message
    }
}

const todoUpdate = async (req, res) => {  // update todo
    const { id } = req.params;    // getting id from params
    const { isCompleted } = req.body;    // getting isCompleted from body
    try {   // try catch block
        const updatedTodo = await todoSchema.findOneAndUpdate({  // finding todo by id and updating it
            _id: id // finding todo by id
        }, {
            isCompleted // updating isCompleted
        }, {
            new: true   // returning updated todo
        });
        res.status(200).json({ updatedTodo });  // sending response
    }
    catch (err) {   // if error occurs
        console.log(err);
        res.status(500).json({ msg: err.message })  // sending error message
    }
}

const todoDelete = async (req, res) => {    // delete todo  
    const { id } = req.params;  // getting id from params
    try {   // try catch block  
        const todo = await todoSchema.findByIdAndDelete(id);    // finding todo by id and deleting it
        if (!todo) {    // if todo not found
            return res.status(404).json({ msg: "Todo not found" })  // sending response
        }
        res.status(200).json({ msg: "Todo deleted successfully" }); // sending response
    }
    catch (err) {   // if error occurs  
        console.log(err);
        res.status(500).json({ msg: err.message })  // sending error message
    }
}

module.exports = {  // exporting all methods
    todoAdd,
    todoGet,
    todoUpdate,
    todoDelete
}