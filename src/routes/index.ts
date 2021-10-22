import { authRouter } from "../modules/AuthUser/AuthRouter";
import { gitRouter } from "./git.router";

const allRoutes = [authRouter, gitRouter]

export {allRoutes}