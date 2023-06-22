const express =  require("express")
require("dotenv").config()
const mongoose =  require("mongoose")
const routes =  require("./Routes/TodoRoutes")
const cors = require("cors")
const app =  express()
const PORT =  process.env.PORT || 8000


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected to mongo db")
}).catch((error)=>{
    console.log("Error in connecting to Mongo DB")
})


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));


app.use("/api",routes)

app.listen(PORT , ()=>{
    console.log("connected to localhost: 5000")
})


