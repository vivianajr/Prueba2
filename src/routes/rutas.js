const {Router} = require ('express');
const router = Router();

const movies = require('../samples.json');


router.get('/', (req, res) => {
    console.log('---Petición GET---');
    res.send(movies);
});

router.post('/', (req, res) => {
    console.log('---Petición POST----');
    //console.log(req.body);
    const {data}= req.body;
    var temp;
        if (data){
                if (data=="ffff")
                    console.log("¡Validar medición!")
                else{
                    temp=data/100;
                    console.log('data ok: ' +temp);
                }
        }
        else
            console.log('Otros datos ok');

    res.send('ok');
});

module.exports = router;    