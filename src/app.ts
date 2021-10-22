import "dotenv/config";
import cors from "cors";
import express from "express";
import http from "http"
import {Server} from "socket.io"

import { allRoutes } from "./routes";

const app = express()
app.use(cors());


const ServerHttp = http.createServer(app);
const io = new Server(ServerHttp, {cors:{
  origin:'*'
}})

io.on("connection", socket=>{
  console.log('usuario conectado no socket '+socket.id)
})

app.use(express.json())
allRoutes.forEach(route =>{
  app.use(route)
})

export { ServerHttp, io}