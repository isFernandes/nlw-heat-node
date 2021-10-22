import {Request, Response, Router} from "express";

const gitRouter = Router();

gitRouter.get("/github", (request: Request, response:Response)=>{
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID_GITHUB}`)
})

gitRouter.get("/signin/callback", (request: Request, response:Response)=>{
  const { code} = request.query;

  return response.json(code)
})

export {gitRouter}