const express = require('express');
const app = express();
const path = require ('path');
const PUERTO = 3000;
const productRoutes = require('./routes/productsRoutes')
const mainRoutes = require('./routes/mainRoutes')

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', mainRoutes)

app.use('/producto', productRoutes)

//por cambiar

app.get('/cuenta', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/sigIn-signOut-Form.html"))
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


