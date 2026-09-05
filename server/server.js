import express from "express"
import dotenv from "dotenv"
import colors from "colors"

dotenv.config()

const port = process.env.port || 5000

const app = express()

app.listen(port, () => {
    console.log(`server is running at port :${port}`.bgBlue);
})