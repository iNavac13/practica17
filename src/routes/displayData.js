let express=require('express'); 
let router=express.Router();

router.post('/addStudent', function (req, res) {
    const nss = req.body.nss;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const tipoSangre = req.body.tipoSangre;
    res.render('displayData', { nss, nombre, edad, tipoSangre });
});

module.exports = router;