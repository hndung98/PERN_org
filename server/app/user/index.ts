
import { Router } from "express";
import UserController from "./controller";

const userRouter = Router();

userRouter.get('/', UserController.getUser);
userRouter.post('/', UserController.createUser);

export default userRouter;