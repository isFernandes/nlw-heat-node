import { io } from "../app"
import { IInfoWS } from "../interfaces/IInfoWS"

class SendMessageService {
  execute(infoWS: IInfoWS){
    io.emit("new_message", infoWS)
  }
}

export {SendMessageService}