import prismaClient from "../prisma";
import { SendMessageService } from "./SendMessageService";

const sendMessageService = new SendMessageService()
class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include:{
        user:true
      }
    });

    sendMessageService.execute({
      text: message.text,
      created_at:message.created_at,
      user_id:message.user_id,
      user:{
        avatar_url:message.user.avatar_url,
        name: message.user.name
      }
    })
    return message;
  }
}
export { CreateMessageService };