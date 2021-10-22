import { Request, Response } from "express";
import { LastTreeMessagesService } from "../services/LastTreeMessagesService";

class LastTreeMessagesController {
  async handle(request:Request, response:Response){
    try {
      const service = new LastTreeMessagesService()
       
      const result = await service.execute();
       
      return response.status(200).json(result)
    } catch (error) {
      console.log(error)
      response.status(500).json({error:error.message})
    }
  }
}

export {LastTreeMessagesController}