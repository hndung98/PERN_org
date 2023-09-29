
import { Router } from "express";
import Todo from './controller';

const todoRouter = Router();

todoRouter.get('/', Todo.getAllTodos);
todoRouter.get('/:id', Todo.getTodo);
todoRouter.post('/', Todo.postTodo);
todoRouter.put('/:id', Todo.putTodo);
todoRouter.delete('/:id', Todo.deleteTodo);

export default todoRouter;