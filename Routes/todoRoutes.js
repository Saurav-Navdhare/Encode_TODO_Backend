const express = require('express'); // importing express    

const todoControllers = require('../controllers/todoControllers');  // importing todoControllers

const Router = express.Router();    // creating Router

Router.post("/addTodo", todoControllers.todoAdd)    // creating routes
Router.get("/getTodos", todoControllers.todoGet)    // creating routes
Router.patch("/updateTodo/:id", todoControllers.todoUpdate)   // creating routes
Router.delete("/deleteTodo/:id", todoControllers.todoDelete)    // creating routes

module.exports = Router;    // exporting Router