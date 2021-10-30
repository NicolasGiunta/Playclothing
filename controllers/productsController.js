let listaDeProductos = [
{
  sexo: 'Hombre',
  nombreDelProducto: 'Buzo Charlatans',
  descripcion:'Buzo rustico, Cuello y cintura de rib, Estampa en manga y frente, Manga larga',
  categoria: 'Buzo',
  colores: 'Negro Blanco',
  tallas: 'S M L XL',
  precio: 12.500
},

{
    sexo: 'Hombre',
    nombreDelProducto:'Camisa Hallucinogenic',
    descripcion: 'Camisa manga corta, estampado de hongos',
    categoria:'Camisa',
    colores: 'Roja Naranja',
    tallas: 'S M L XL',
    precio: 9.880
  },
  
  {
    sexo: 'Mujer',
    nombreDelProducto:'Camisa Hallucinogenic',
    descripcion: 'Camisa manga corta, estampado de hongos',
    categoria:'Camisa',
    colores: 'Roja Naranja',
    tallas: 'S M L XL',
    precio: 9.880
  },
  
  {
    sexo: 'Mujer',
    nombreDelProducto:'Camisa Hallucinogenic',
    descripcion: 'Camisa manga corta, estampado de hongos',
    categoria:'Camisa',
    colores: 'Roja Naranja',
    tallas: 'S M L XL',
    precio: 9.880
  }
  
]


const productsController = {
    index: function (req, res) {
        res.render('productDetail', {'listaDeProductos': listaDeProductos})
},



}


module.exports = productsController;