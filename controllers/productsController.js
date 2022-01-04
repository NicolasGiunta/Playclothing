//const express = require('express')
//const fs = require('fs');

const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


//const productsFilePath = path.join(__dirname, '../data/products.json');
//const listaDeProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const nuevoId = () => {
// let ultimo = 0;
// listaDeProductos.forEach(product => {
//   if (product.id > ultimo) {
//     ultimo = product.id;
//   }
//  });
// return ultimo + 1;
//}


const productsController = {

  mujer: function (req, res) {
    db.Producto.findAll()
      .then(productos => {
        res.render('mujer', { productos, toThousand })
      })

  },

  hombre: function (req, res) {
    db.Producto.findAll()
      .then(productos => {
        res.render('hombre', { productos, toThousand })
      })

  },


  detalle: function (req, res) {

    let id = req.params.id
    let url = req.path
    // let producto = listaDeProductos.find(element => element.id == id)

    let producto = db.Producto.findByPk(id,
      {
        include: [{ association: "tallas" }]
      })

    let categorias = db.Categoria.findAll()
  
  

    Promise
      .all([producto, categorias])
      .then(([producto, categorias]) => {
        let categoria = categorias.find(el => el.id === producto.categoria_id)
        let urlFinal = "/" + categoria.nombre + "/" + producto.id
        if (url != urlFinal) {
          res.redirect("/")
        }
        else {
          return res.render('productDetail', { producto, toThousand })
        }

      })


  },


  create: function (req, res) {

    let tallas = db.Talla.findAll()
    let categorias = db.Categoria.findAll();
    let tipos = db.Tipo.findAll();

    Promise
      .all([tallas, categorias, tipos])
      .then(([tallas, categorias, tipos]) => {
        return res.render('product-create', { tallas, categorias, tipos })

      })
  },


  store: function (req, res) {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
      let tallas = db.Talla.findAll()
      let categorias = db.Categoria.findAll();
      let tipos = db.Tipo.findAll();

      Promise
        .all([tallas, categorias, tipos])
        .then(([tallas, categorias, tipos]) => {
          return res.render('product-create', { tallas, categorias, tipos, errors: errors.mapped(), old: req.body })

        })

    }
    else {
      db.Producto.create({
        nombreDelProducto: req.body.nombreDelProducto,
        imagen: "/image/productos/" + req.file.filename,
        descripcion: req.body.descripcion,
        categoria_id: req.body.categoria,
        tipo_id: req.body.tipo,
        color: req.body.color,
        precio: req.body.precio
      })
        .then(productoCreado => {
          let tallas = req.body.talla
          tallas.forEach(talla => {
            db.ProductoTalla.create({
              talla_id: talla,
              producto_id: productoCreado.id
            })
          })
          return res.redirect("/")



        })
        .catch(error => res.send(error))
    }
  },

  edit: (req, res) => {

    let producto = db.Producto.findByPk(req.params.id, {
      include: [{ association: "tallas" }]
    })

    let categorias = db.Categoria.findAll();
    let tipos = db.Tipo.findAll();
    let tallas = db.Talla.findAll();

    Promise
      .all([producto, categorias, tipos, tallas])
      .then(([producto, categorias, tipos, tallas]) => {
        return res.render('productEdit', { producto, categorias, tipos, tallas })

      })


  },


  update: (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
      let producto = db.Producto.findByPk(req.params.id, {
        include: [{ association: "tallas" }]
      })
      let tallas = db.Talla.findAll()
      let categorias = db.Categoria.findAll();
      let tipos = db.Tipo.findAll();

      Promise
        .all([tallas, categorias, tipos, producto])
        .then(([tallas, categorias, tipos, producto]) => {
          return res.render('productEdit', { tallas, categorias, tipos, producto, errors: errors.mapped(), old: req.body })

        })

    }
    else {
      db.ProductoTalla.destroy({
        where: {
          producto_id: req.params.id
        }
      })
      .then(function (){
        db.Producto.update({
        nombreDelProducto: req.body.nombreDelProducto,
        imagen: "/image/productos/" + req.file.filename,
        descripcion: req.body.descripcion,
        categoria_id: req.body.categoria,
        tipo_id: req.body.tipo,
        color: req.body.color,
        precio: req.body.precio
      },
      
      {
        where: {
          id: req.params.id
        }
      })

    })
        .then(productoEditado => {
          let tallas = req.body.talla
          console.log(tallas)
          tallas.forEach(talla => {
            db.ProductoTalla.create({
              talla_id: talla,
              producto_id: req.params.id
            },
            {
              where:{
                producto_id: req.params.id
              }
            })
          })
          return res.redirect("/")

        })
        .catch(error => res.send(error))
    }

  },

  search: (req, res) => {
    res.send(req.query.busqueda)
   // db.Producto.findAll({
    //where: {
    //  nombreDelProducto: {[Op.like]: "%"+req.query.busqueda+"%"
    //   }
    // },
    // {
    //   include: [{association: "categoria"}]
    // })
    // .then(productos => {
    //   res.render('busqueda', {productos})
    // })
    // .catch(error => res.send(error))
    
  },

  destroy: (req, res) => {

    db.ProductoTalla.destroy({
      where: {
          producto_id: req.params.id
      }
  })
  

  .then(function(borrado) {
      db.Producto.destroy({
          where: {
              id:req.params.id
          }
  }) 
  })
  .catch(error => console.log(error));    
  res.redirect('/');
  }


}

module.exports = productsController;