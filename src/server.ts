import { ServerHttp } from "./app"

const PORT = process.env.PORT || 3333
ServerHttp.listen(PORT, ()=>{
  console.log(`Server is running in PORT: ${PORT}`)
})