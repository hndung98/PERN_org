
import { Router } from "express";
import TodoController from './controller';

const todoRouter = Router();

todoRouter.get('/', TodoController.getAllTodos);
todoRouter.get('/:id', TodoController.getTodo);
todoRouter.post('/', TodoController.postTodo);
todoRouter.post('/saveFile', TodoController.saveFile);
todoRouter.put('/:id', TodoController.putTodo);
todoRouter.delete('/:id', TodoController.deleteTodo);

export default todoRouter;