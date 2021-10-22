import {Router} from "express";
import { AuthUserController } from "../controllers/AuthUserController";

const authRouter = Router();

authRouter.post("/authenticate",  new AuthUserController().handle)

export { authRouter }