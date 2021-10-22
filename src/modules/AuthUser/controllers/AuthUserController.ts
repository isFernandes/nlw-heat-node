import { Request, Response } from "express";
import { AuthUserService } from "../services/AuthUserService";

class AuthUserController {
  async handle(request: Request, response: Response){
    const service = new AuthUserService();

    const result = await service.execute(request.body.code)

    return response.json(result)
  }
}

export {  AuthUserController }