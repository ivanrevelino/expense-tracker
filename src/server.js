import express from "express"
import { json } from "sequelize";

const app = express();

app.use(json())

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})