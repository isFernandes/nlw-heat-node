import "dotenv/config";
import express from "express";
import { gitRouter } from "./routes/git.router";

const app = express()


app.use(gitRouter)

const PORT = process.env.PORT || 3333
app.listen(PORT, ()=>{
  console.log(`Server is running in PORT: ${PORT}`)
})