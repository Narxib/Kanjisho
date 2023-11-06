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
        fetch(`https://jisho.org/api/v1/search/words?keyword=${req.params.searchParam}`)
        .then((data)=> {
            console.log("DATA FETCHED | FORMATTING ")
            data.json()
        })
        .then((formatted)=>{ 
            console.log(formatted)
            res.render("results.ejs",{results:formatted,search:req.params.searchParam})
        })
    
       
    }
    static async renderResults2(req,res,next){
        const search = await req.params.searchParam
        jisho.searchForKanji(search)
        .then(result=>{
            const object = {
                "kanji":search,
                "jlpt":result.jlptLevel,
                "kunreadings":result.kunyomi,
                "onreadings":result.onyomi,
                "meanings":result.meaning,
            }
            console.log(result)
            res.render("results2.ejs",{result:object,search:search})
        })
    
       
    }
   
}
