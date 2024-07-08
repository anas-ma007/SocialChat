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

let a= {}
if(!a){
    console.log("log a");
} else {
    console.log("a with value");
}


app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("hii its a get method")
})

//api end point
app.use("/api", router)


const port = process.env.PORT || 3000

connectDB().then(() => {
    app.listen(port, () => { console.log(`Server connected to port number ${port}`) })
})
