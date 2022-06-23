const express= require("express")
const cors= require("cors")
const connect= require("./config/db")
const { register, login } = require("./controllers/auth.controller");
const app= express()
app.use(express.json())
app.use(cors())
app.post("/register", register)
app.post("/login", login)

app.listen(process.env.PORT || 8888 , async ()=>{
        try {
           await connect()  
           console.log("listening port number 8888")
          
        } catch (error) {
            console.log(error.message)
        }
})