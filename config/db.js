const mysql = require("mysql2/promise")
require("dotenv").config()

const db = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
})

db.getConnection(()=>{
    try {
        console.log("berhasil terhubung ke database")
    } catch (error) {
        console.log("gagal terhubung")
    }
})



module.exports=db