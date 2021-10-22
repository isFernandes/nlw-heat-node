import { Router } from "express";
import { ProfileUserController } from "../controllers/ProfileUserController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const profileRouter = Router();


profileRouter.get("/profile",ensureAuthenticated, new ProfileUserController().handle)

export {profileRouter}