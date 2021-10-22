import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
  async handle(request:Request, response:Response){
    try {
      const service = new ProfileUserService()
       
      const result = await service.execute(request.user_id);
       
      return response.status(200).json(result)
    } catch (error) {
      console.log(error)
      response.status(500).json({error:error.message})
    }
  }
}

export {ProfileUserController}