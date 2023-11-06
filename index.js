import 'dotenv/config'
import express,{json} from "express"
import {searchRoute} from "./routes/landing.js"
import {apiV1Route} from "./routes/api/v1/api.js"
import {apiV2Route} from "./routes/api/v2/api.js"
import { URL } from 'url';
import path from "path"

const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set("views", __dirname + 'views')


let PORT = process.env.PORT

app.use("/", searchRoute)
app.use("/api/v1", apiV1Route)
app.use("/api/v2", apiV2Route)


app.listen(PORT,(req,res)=>{
    console.log(`Server started at http://localhost:${PORT}`)
})