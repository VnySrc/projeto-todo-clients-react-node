import express from "express"
import http from "http"
import dotenv from "dotenv"
import Routes from "../src/routes/api.js"
import cors from "cors"

dotenv.config()

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(Routes)

app.use( async (req, res) => {
    res.json({status: "Endpoint não Encontrado"})
})
app.errotRander
server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server Funcionando na Porta ${process.env.SERVER_PORT || "'Insira a Porta no arquivo .env'"}`)
})