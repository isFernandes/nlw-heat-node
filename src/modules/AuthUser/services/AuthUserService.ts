import axios from "axios"
import { IAccessTokenResponse } from "../IAuthInterfaces/IAccesTokenResponse"
import { IUserResponse } from "../IAuthInterfaces/IUserResponse"

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
  return data  
}
  
}

export {  AuthUserService }