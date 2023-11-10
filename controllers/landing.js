import JishoAPI from 'unofficial-jisho-api';

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
        console.log("FETCHING DATA")
        const data = await fetch(`https://jisho.org/api/v1/search/words?keyword=店`)
        .then((data)=> data.json())
        .then((formatted)=>res.json(formatted))

    }
   
}