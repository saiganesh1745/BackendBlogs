const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")        // allows resourse sharing between two 

// const dburl = "mongodb://localhost:27017/heroblogs"
const dburl = "mongodb+srv://klu:klu@cluster0.mpguc.mongodb.net/heroblogs?retryWrites=true&w=majority"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});

const app = express()
app.use(express.json())
app.use(cors())

const viewerrouter = require("./routes/viewerroutes")

app.use("",viewerrouter)


const port= 4005
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})