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
        const searchQuery = req.params.searchParam
        const kanjiData = await jisho.searchForKanji(searchQuery)
        const vocabData = await jisho.searchForPhrase(searchQuery)
        console.log(vocabData.data[2])
       
        res.render("results.ejs",{kanjiResults:kanjiData, vocabResults:vocabData, search:kanjiData.query})
    }
   
}