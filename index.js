require("dotenv").config();         // importing dotenv and config
const express = require('express');     // importing express
const mongoose = require('mongoose');   // importing mongoose
const todoRouter = require('./Routes/todoRoutes');      // importing todoRoutes

const app = express();    // creating app

app.use(express.json());    // using json middleware in app to parse json data
app.use("/api/todo", todoRouter);   // using todoRouter in app


mongoose.connect(process.env.MONGO_URI).then(() => {    // connecting to mongoDB
    console.log("Connected to DB")  // if connected
    const Port = process.env.PORT || 3000;  // getting port from env or 3000
    app.listen(Port, (err) => {    // listening to port
        if (err) throw err;  // if error occurs
        console.log(`Server is running on port ${Port}`)    // printing port number on which server is running
    })
}).catch((err) => {  // if error occurs
    console.log("err"); // printing error
})

