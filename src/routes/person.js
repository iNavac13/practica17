let express=require('express'); 
let router=express.Router();

router.get('/student', function (req, res) {
    res.render('student'); 
});

router.post('/addStudent', function (req, res) { 
    const nss = req.body.nss;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const tipoSangre = req.body.tipoSangre;
    res.render('displayData', { nss, nombre, edad, tipoSangre }); 
});

router.post('/personJson', express.json({type:'*/*'}), function (req, res) { 
    console.log(`nombre: ${req.body.nombre}
                apellido: ${req.body.apellido}`);
});

router.get('/testJson', function (req, res) { 
    res.render('testJson');
});

module.exports = router; 