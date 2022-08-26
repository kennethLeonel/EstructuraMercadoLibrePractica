
const express = require('express');
const app = express();

const puerto = process.env.PORT || 3000;
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
app.listen( puerto , ()=>{
    console.log('Servidor levantado en el puerto ' + puerto);
});
