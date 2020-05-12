const express = require('express');
const app = express();
const morgan = require('morgan');



// middleweres
app.use(morgan(':method :url'))



app.get('/users/:id',function (req,res){
    res.send(req.params.id)
})





const puerto = 3010;

app.listen(puerto,function (){
    console.log(`Escuchando en el puerto ${puerto}`)
})