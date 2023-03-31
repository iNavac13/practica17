let express = require('express'); 
let router = express.Router(); 

router.get('/student', function (req, res) {
    res.render('student'); 
});

module.exports = router; 