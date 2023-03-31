let express=require('express'); // inyección de express
let app=express(); //nuestro servidor
let port=process.env.PORT||3000; // puerto

let personsRouter = require('./routes/person'); //router de person
let studentRouter = require('./routes/student'); //router de student
let displayDataRouter = require('./routes/displayData'); //router de displayData
app.use(express.urlencoded({ extended: true })); 
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(personsRouter);
app.use(studentRouter);
app.use(displayDataRouter);

app.listen(port, () => {
    console.log(`escuchando al puerto ${port}`);
});