
const express = require('express');
const app = express();

app.use(express.static('public'));

const path = require('path');

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
});

app.post('/', (req,res)=>{
    console.log("se realizó el registro");
    res.sendFile(path.join(__dirname,'./views/home.html'));
});
app.get('/registro', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/registrar.html'));
});
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'));
});

// Se levanta el servidor
app.listen( 3000 , ()=>{
    console.log('Servidor levantado en el puerto 3000');
});
