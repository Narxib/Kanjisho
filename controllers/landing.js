import JishoAPI from 'unofficial-jisho-api';
import fetch from 'node-fetch';

const jisho = new JishoAPI();

export class landingController{
    static async renderHome(req,res){
        res.render("landing")
    }
  static async searchtoApi(req,res,next){
        const param = req.body.searchParam
        console.log("REQUEST RECEIVED | REDIRECTING")
        res.redirect(`/search/${param}`)
    }

    static async renderResults(req,res,next){
        const searchQuery = req.body.searchParam
        try {
            const data = await fetch(`https://jisho.org/api/v1/search/words?keyword=${searchQuery}`);
            const formatted = await data.json()
            res.json(formatted)
          } catch (error) {
            // TypeError: Failed to fetch
            console.log('There was an error', error);
            res.redirect("/")
          }
        
    }
   
}