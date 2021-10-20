const express = require('express');
const app = express();
const path = require ('path');
const PUERTO = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.get('/cuenta', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/sigIn-signOut-Form.html"))
}
);

app.get('/producto', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/productDetail.html"))
}
);

app.get('/carrito', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/carrito_compras.html"))
}
);

app.get('/registro', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/register_form.html"))
}
);

app.post('/micuenta', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"))
}
);


app.listen(PUERTO, ()=>{console.log("Andando sin problema")});


