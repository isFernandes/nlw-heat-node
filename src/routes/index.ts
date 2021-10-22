import { authRouter } from "./AuthRouter";
import { gitRouter } from "./git.router";

const allRoutes = [authRouter, gitRouter]

export {allRoutes}