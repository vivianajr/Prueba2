const {Router} = require ('express');
const router = Router();

router.get('/', (req, res) => {
    const data={
        "name": "Vivi",
        "edad": 23
    };
    res.json(data);
});

module.exports = router;    