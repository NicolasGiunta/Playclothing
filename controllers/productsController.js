const express = require('express')
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const listaDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const nuevoId = () => {
  let ultimo = 0;
  listaDeProductos.forEach(product => {
    if (product.id > ultimo) {
      ultimo = product.id;
    }
  });
  return ultimo + 1;
}


const productsController = {

  mujer: function (req, res) {
    res.render('mujer', { listaDeProductos })
  },

  hombre: function (req, res) {
    res.render('hombre', { listaDeProductos })
  },

  
  detalle: function (req, res) {

    let id = req.params.id
    let url = req.path
    let producto = listaDeProductos.find(element =>  element.id == id )

    let urlFinal = "/" + producto.sexo + "/" + producto.id

    if (url != "/" + producto.sexo + "/" + producto.id){
      res.send ("error 404")
    } else{
      res.render('productDetail', { producto })
    }

  console.log(url)
  console.log(urlFinal)
    
  },


  create: function (req, res) {
    res.render('product-create')
  },

  store: function (req, res) {
    if (req.file) {
      const nuevoProducto = {
        id: nuevoId(),
        sexo: req.body.sexo,
        nombreDelProducto: req.body.nombre,
        imagen: "/image/productos/" + req.file.filename,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        colores: req.body.colores,
        tallas: req.body.tallas,
        precio: req.body.precio
      }
      listaDeProductos.push(nuevoProducto)
      const productoJSON = JSON.stringify(listaDeProductos)
      fs.writeFileSync(productsFilePath, productoJSON)
      res.redirect("/")
    }
    else {
      res.redirect('/create')
    }
  },

  edit: (req, res) => {
    let id = req.params.id
    let productoAEditar = listaDeProductos.find(element => element.id == id);
    res.render('edit', { producto: productoAEditar })
  },

  update: (req, res) => {
    if (req.file) {
      listaDeProductos.forEach((element) => {
        if (element.id == req.params.id) {
          element.nombreDelProducto = req.body.name,
            element.imagen = req.file.filename,
            element.descripcion = req.body.descripcion;
          element.categoria = req.body.categoria,
            element.colores = req.body.colores,
            element.tallas = req.body.tallas,
            element.precio = req.body.precio;

          const productosJSON = JSON.stringify(listaDeProductos)
          fs.writeFileSync(productsFilePath, productosJSON)
          res.redirect('/');
        }
        else {
          res.render('edit')
        }

      })



    }

  }

}

module.exports = productsController;