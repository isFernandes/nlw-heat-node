import "dotenv/config";
import cors from "cors";
import express from "express";
import { allRoutes } from "./routes";

const app = express()
app.use(cors());
app.use(express.json())

allRoutes.forEach(route =>{
  app.use(route)
})

const PORT = process.env.PORT || 3333
app.listen(PORT, ()=>{
  console.log(`Server is running in PORT: ${PORT}`)
})