import Router from "express"
import {landingController} from "../controllers/landing.js"

export const searchRoute = Router()

searchRoute.get("/", landingController.renderHome)
searchRoute.get("/search/:searchParam", landingController.renderResults)
searchRoute.post("/search", landingController.searchtoApi)
