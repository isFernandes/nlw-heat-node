import { authRouter } from "./auth.router";
import { gitRouter } from "./git.router";
import { messageRouter } from "./message.router";
import { profileRouter } from "./profile.router";

const allRoutes = [authRouter, gitRouter, messageRouter,profileRouter]

export {allRoutes}