
const express = require('express');
const app = express();

app.use(express.static('public'));

const path = require('path');

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
});

// Se levanta el servidor
app.listen( 3000);
