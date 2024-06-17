const express = require("express")
const app = express()
const router = require("./routes/notes")
// const bodyParser = require("body-parser")
require("dotenv").config()

app.use(express.json())
app.use(router)
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    return res.json({message:"berhasil"})
})

app.listen(process.env.APP_PORT,()=>{
    console.log("server berjalan di path",process.env.APP_PORT)
})