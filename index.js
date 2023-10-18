import 'dotenv/config'
import express from "express"
import {landingRoute} from "./routes/landing.js"

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

let PORT = process.env.PORT

app.use("/",landingRoute)

app.listen(PORT,(req,res)=>{
    console.log(`Server started at ${PORT}`)
})