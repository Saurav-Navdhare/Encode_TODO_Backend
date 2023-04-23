
# Encode Web Development Workshop Backend

This repo contains demo code of CRUD operations build for TODO app developed on Day 2 of Encode's Web Development Workshop

 

## Authors

- [@saurav-navdhare](https://www.github.com/saurav-navdhare)


## Cloning

Clone the repo with following command and change the directory

```bash
  git clone https://github.com/Saurav-Navdhare/Encode_TODO_Backend
```
```bash
  cd Encode_TODO_Backend
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`: Add MONGO URI String as this variables value


## Installation

Install dependecies using following command
```bash
  npm i
```
To start run
```bash
  npm run dev
```

## Documentation

```code
POST request on localhost:port/api/todo/addTodo
with title (> 5 characters)

GET request on localhost:port/api/todo/todoGet
to get the todo list

PATCH request on localhost:port/api/todo/updateTodo/:id
and the isCompleted value in body to Update the Todo with _id as id

DELETE request on localhost:port/api/todo/deleteTodo/:id
to delete the Todo with _id as id

```
