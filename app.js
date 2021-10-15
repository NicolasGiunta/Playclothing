const express = require('express');
const app = express();
const path = require ('path');
const PUERTO = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"))
});

app.get('/producto', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/productDetail.html"))
}
);

app.get('/cuenta', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/sigIn-signOut-Form.html"))
}
);

app.listen(PUERTO, ()=>{console.log("Andando sin problema")});


