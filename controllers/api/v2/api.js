import JishoAPI from 'unofficial-jisho-api';

const jisho = new JishoAPI();

export class apiV2Controller{
    static async test(req,res){
        const search = await req.params.searchParam
        jisho.searchForKanji(search)
        .then(result => {
            res.send(result)
        })
        
    }
}