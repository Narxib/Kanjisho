import Router from "express"
import {apiV2Controller} from "../../../controllers/api/v2/api.js"

export const apiV2Route = Router()

apiV2Route.get("/search/:searchParam", apiV2Controller.test)