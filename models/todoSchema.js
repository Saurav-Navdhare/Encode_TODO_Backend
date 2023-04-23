const mongoose = require('mongoose'); // importing mongoose 
const Schema = mongoose.Schema; // importing Schema
const todoSchema = new Schema({ // creating todoSchema
    title: {        // title field
        type: String,       // type of field String
        required: true,     // required field
        validate: {         // validation
            validator: (title) => title.trim().length > 5,      // validator function, title must be longer than 5 characters
            message: "Title must be longer than 5 characters"   // error message
        }
    },
    isCompleted: {  // isCompleted field
        type: Boolean,  // type of field Boolean    
        default: false, // default value
    },
    createdAt: {    // createdAt field
        type: Date,    // type of field Date
        default: Date.now(),    // default value
    }
});

module.exports = mongoose.model('Todo', todoSchema);    // exporting todoSchema