import { Router } from "express";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { LastTreeMessagesController } from "../controllers/LastTreeMessagesController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const messageRouter = Router();

messageRouter.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

messageRouter.get("/messages/last3", new LastTreeMessagesController().handle)

export {messageRouter}