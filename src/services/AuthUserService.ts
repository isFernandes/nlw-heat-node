import axios from "axios"
import {sign} from "jsonwebtoken"

import { IAccessTokenResponse } from "../interfaces/IAccesTokenResponse"
import { IUserResponse } from "../interfaces/IUserResponse"
import prismaClient from "../prisma"

class AuthUserService {
  async execute(code: String){
    const url = "https://github.com/login/oauth/access_token"

    const {data: tokenResponse} = await axios.post<IAccessTokenResponse>(url, null, {params:{
      client_id:process.env.CLIENT_ID_GITHUB,
      client_secret:process.env.CLIENT_SECRET_GITHUB,
      code
    },
    headers:{"Accept":"application/json"}
  })

  const {data} = await axios.get<IUserResponse>("https://api.github.com/user", {
    headers:{
      authorization: `Bearer ${tokenResponse.access_token}`
    }
  })
  const user = await prismaClient.user.findFirst({where:{github_id: data.id}})
  
  if(!user){
    await prismaClient.user.create({data:{
      avatar_url:data.avatar_url,
      login: data.login,
      name: data.name,
      github_id: data.id
    }})
  }

  const token = sign({
    user:{
      name:user.name,
      avatar_url: user.avatar_url,
      id: user.id,
    }
  },process.env.JWT_SECRET, {subject: user.id, expiresIn:'1d' });
  
  return {token, user}  
}
  
}

export {  AuthUserService }