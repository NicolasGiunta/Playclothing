let listaDeProductos = [
{
  sexo: 'Hombre',
  nombreDelProducto: 'Buzo Charlatans',
  imagen: "../image/productos/hombre/buzo-hombre.jpg",
  descripcion:'Buzo rustico, Cuello y cintura de rib, Estampa en manga y frente, Manga larga',
  categoria: 'Buzo',
  colores: 'Negro Blanco',
  tallas: 'S M L XL',
  precio: 12.500
},

{
    sexo: 'Hombre',
    nombreDelProducto:'Camisa Hallucinogenic',
    imagen: "../image/productos/hombre/camisaHombre.jpeg",
    descripcion: 'Camisa manga corta, estampado de hongos',
    categoria:'Camisa',
    colores: 'Roja Naranja',
    tallas: 'S M L XL',
    precio: 9.880
  },
  
  {
    sexo: 'Mujer',
    nombreDelProducto:'buzo Calder sun',
    imagen: "../image/productos/mujeres/buzoMujer.jpeg",
    descripcion: 'Buzo de rústico, Calce clásico, Escote redondo con puños',
    categoria:'Buzo',
    colores: 'Azul',
    tallas: 'S M L XL',
    precio: 9.880
  },
  
  {
    sexo: 'Mujer',
    nombreDelProducto:'Remera Ml Flores',
    imagen: "../image/productos/mujeres/remeraMujer.jpeg",
    descripcion: 'Remera con estampado frontal',
    categoria:'Remera',
    colores: 'Blanca',
    tallas: 'S M L XL',
    precio: 4.880
  }
  
]



const productsController = {
    producto: function (req, res) {
        res.render('productDetail', {'listaDeProductos': listaDeProductos})
},
    mujer: function (req, res) {
      res.render('mujer', {'listaDeProductos': listaDeProductos})
},
    hombre: function (req, res) {
  res.render('hombre', {'listaDeProductos': listaDeProductos})
   
}
}


module.exports = productsController;