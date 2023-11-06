import Router from "express"
import {apiV1Controller} from "../../../controllers/api/v1/api.js"

export const apiV1Route = Router()

apiV1Route.get("/test", apiV1Controller.test)
apiV1Route.get("/search/:kanji",apiV1Controller.search)

