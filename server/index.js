const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());


// create todo

app.post("/todos", async(req, res) =>{

    try {
        
        const { description } =req.body;
        const { title } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description,title) VALUES ($1,$2) RETURNING *", [description,title]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }

});

// get all

app.get("/todos", async(req,res) => {

    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    }

});

// get specific todo

app.get("/todos/:id", async (req, res) => {

    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json(todo.rows);
    } catch (error) {
        console.error(error.message);
    }


})

// update todo

app.put("/todos/:id", async(req,res) =>{

    try {
        const { id } =req.params;
        const { title } = req.body;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1, title = $2 WHERE todo_id =$3", [description, title, id]);

        res.json("Todo was updated!");
    } catch (error) {
        console.error(error.message)
    }
})

// delete todo

app.delete("/todos/:id", async (req, res) =>{

    try {
        const {id} =req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted");
    } catch (error) {
        console.log(error.message)
    }

});



app.listen(5000, ()=>{
    console.log("server has started on port 5000");
});