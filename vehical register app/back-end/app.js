const express =require("express")
const app =express()

const bodyParser =require("body-parser")
const cors =require("cors")

const port =4000

const mongoose =require("mongoose")

const config =require("./database/database")
const vehicalRoute = require("./routing/routes")




mongoose.connect(config.DB,{useNewUrlParser:true})
    .then(
        ()=>{console.log("Database is Connected")},err =>{console.log("Cannot Connect to database : "+err)})



app.use(cors())

app.use(bodyParser.json())

app.use("/vehicals",vehicalRoute)




app.listen(port,function() {
    console.log("server is running on port : ",port)
})
