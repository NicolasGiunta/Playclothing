const express = require('express')
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const listaDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// const uuid = require('uuid/v4')


const productsController = {
    producto: function (req, res) {
        res.render('productDetail', {listaDeProductos})
},
    mujer: function (req, res) {
      res.render('mujer', {listaDeProductos})
},
    hombre: function (req, res) {
  res.render('hombre', {listaDeProductos})
   
},
create: function (req, res){
  res.render('product-create')
},
store: function (req, res){
  const nuevoProducto = {
    // id: uuid(),
    sexo: req.body.sexo,
        nombreDelProducto: req.body.nombre,
        imagen: req.file.filename,
        descripcion: req.body.description,
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
}



module.exports = productsController;