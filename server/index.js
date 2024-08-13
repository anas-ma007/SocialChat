const express = require("express")
const cors = require("cors");
const connectDB = require("./config/conectDB");
require("dotenv").config()
const router = require("./routes/index")
const cookiesParser = require("cookie-parser")


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookiesParser())

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

//api end point
app.use("/api", router)

const port = process.env.PORT || 3000

connectDB().then(() => {
    app.listen(port, () => { console.log(`Server connected to port number ${port}`) })
})
