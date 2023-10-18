import Router from "express"
import {landingController} from "../controllers/landing.js"

export const landingRoute = Router()

landingRoute.get("/", landingController.searcher)