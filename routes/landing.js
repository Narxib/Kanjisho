import Router from "express"
import {landingController} from "../controllers/landing.js"

export const searchRoute = Router()

searchRoute.get("/", landingController.renderHome)
searchRoute.get("/search/:searchParam", landingController.renderResults)
searchRoute.get("/search2/:searchParam", landingController.renderResults2)
searchRoute.post("/search", landingController.searchtoApi)
