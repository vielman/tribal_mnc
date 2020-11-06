var express = require('express');
var router = express.Router();
const fetch =  require("node-fetch");

/* GET users listing. */
router.get('/:search', function(req, res, next) {
    return getItunesApple(req.params.search)
        .then(data=>{
            data.sort((a, b) => {
                if(a.artist < b.artist) return -1;
                if(a.artist > b.artist) return 1;
      
                return 0;
            })
            return res.status(200).json({
                data: data
            });
        })
        .catch(e=>{
            return res.status(500).json({
                message: 'Something goes wrong with server',
                data: {},
                error: true
            });
    });
 
});

async function getItunesApple(search) {
    var consolidado = []
    const result = await fetch(`https://itunes.apple.com/search?term=${search}`);
    const res = await result.json();
    for (valor of res.results) {
        consolidado.push({type: valor.wrapperType, artist: valor.artistName, name: valor.trackName, description:'https://idenda.com/wp-content/uploads/2017/02/INTEGRATIONS-iTunes.png'});
    }

    const result2 = await fetch(`http://api.tvmaze.com/search/shows?q=${search}`);
    const res2 = await result2.json();
    for (valor of res2) {
        consolidado.push({type:valor.show.type, artist:valor.show.name, name:valor.show.language, description:'http://static.tvmaze.com/images/tvm-header-logo.png'});
    }
    return consolidado;
};

module.exports = router;
