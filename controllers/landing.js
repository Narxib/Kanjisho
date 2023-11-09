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
        const data = await fetch(`https://jisho.org/api/v1/search/words?keyword=${req.params.searchParam}`)
        .then((data)=> data.json())
        .then((formatted)=>{return formatted})
        const reg = `私-\d`
        const onyomi = await jisho.searchForKanji("不")
        console.log(data.data[0].slug)
        
        res.render("results.ejs",{results:data,search:req.params.searchParam,onyomireading:onyomi})
    
    }
   
}