import fetch from "node-fetch"

export class apiV1Controller{
    static async test(req,res){
        res.json({message:"hello"})
    };
    static async search(req,res){
        console.log(req.params.kanji)
        const data = await fetch(`https://kanjiapi.dev/v1/kanji/${req.params.kanji}`)
        .then((res) =>{ res.json()})
	    .then(json => res.send(json))
    }
}