import express from "express";
import cors from 'cors';
import pool from "./db/db";
import todoRouter from "./todo";

const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
// app.post("/todos", async(req, res) => {
//     try {
//         const { description } = req.body;
//         const newTodo = await pool.query(
//             "INSERT INTO todo (description) VALUES($1) RETURNING *",
//             [description]
//         );
        
//         res.json(newTodo);
//         // res.json(newTodo.rows[0]);
//     } catch (error) {
//         console.error(error.message);
//     }
// });

// app.get("/todos", async(req, res) => {
//     try {
//         const allTodos = await pool.query("SELECT * FROM todo");
//         res.json(allTodos.rows);
//     } catch (error) {
//         console.log(error.message);
//     }
// });

// app.get("/todos/:id", async(req, res) => {
//     try {
//         const { id } = req.params;
//         const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
//         //const allTodos = await pool.query("SELECT * FROM todo");
//         res.json(todo.rows[0]);
//     } catch (error) {
//         console.log(error.message);
//     }
// });

app.use('/todos', todoRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my api app!");
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});