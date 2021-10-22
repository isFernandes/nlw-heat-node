import prismaClient from "../prisma"

class LastTreeMessagesService {
  async execute(){
    return await prismaClient.message.findMany({
      take:3,
      orderBy:{
        created_at:"desc"
      },
      include:{
        user:true
      }
    }) 
  }
}

export {LastTreeMessagesService}