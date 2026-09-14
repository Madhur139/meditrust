import dns from "dns"
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectdb from "./config/dbconfig.js"

dotenv.config()


import authroutes from "./routes/authroutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import errorHandler from "./Middleware/errorHandler.js";
import aiRoutes from "./routes/aiRoutes.js"



const PORT = process.env.PORT || 5000
const app = express()

// DB connection
connectdb()

// Body-parser
app.use(express.json())
app.use(express.urlencoded())

// auth routes
app.use("/api/auth",authroutes)

// ADMIN ROUTES
app.use("/api/admin", adminRoutes)

// A.I Routes
app.use("/api/ai", aiRoutes)


// Error Handler
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server is running at port :${PORT}`.bgBlue);
})