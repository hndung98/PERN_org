import express from "express";
import cors from 'cors';
import todoRouter from "./todo";
import userRouter from "./user";

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.use('/api/todo', todoRouter);
app.use('/api/user', userRouter);

app.get("/api", (req, res) => {
  res.send("Welcome to my api app!");
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});