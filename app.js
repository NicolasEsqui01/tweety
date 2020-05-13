const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const puerto = 3000;

// rutas del tweet
const routes = require('./routes');



// middleweres
app.use(morgan('tiny'));
app.use(express.static('public'))

//nunjucks
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', { noCache: true }); // apunta a nunjucks al directorio correcto para los templates

app.use('/',routes)


app.listen(puerto,function (){
    console.log(`Escuchando en el puerto ${puerto}`)
});