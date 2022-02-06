const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productsAPIController = {

    products: async (req, res) => {
        let productos = await db.Producto.findAll({ 
            include: [{ association: "categoria", attributes: {exclude:["id"]}}, { association: "tipo", attributes: {exclude:["id"]}}]
          })

        let categoriaHombre = productos.filter(producto => producto.categoria_id == 1)
        let categoriaMujer = productos.filter(producto => producto.categoria_id == 2)
        let tipoRemera = productos.filter(producto => producto.tipo_id == 2)
        let tipoCamisa = productos.filter(producto => producto.tipo_id == 3)

        productos.forEach(producto => {producto.dataValues["detalle"] = "/api/products/" + producto.id})

        return res.status(400).json({
            message: "Estos son los productos registrados",
            url: "/api/products",
            length: productos.length,
            totalCategoriaHombre: categoriaHombre.length,
            totalCategoriMujer: categoriaMujer.length,
            totalTipoRemera: tipoRemera.length,
            totalTipoCamisa: tipoCamisa.length,
            data: productos
        })
    },

    productById: async (req, res) => {
        let id = req.params.id
        let productoById = await db.Producto.findByPk(id, { include: [{ association: "categoria", attributes: {exclude:["id"]}}, { association: "tipo", attributes: {exclude:["id"]}}]})

        if (productoById == undefined) {
            return res.status(404).json({
                message: "Este id de producto no existe en este base de datos",
                url: "/api/products/" + id,
            })
        }
        else {
            return res.status(400).json({
                message: "Este es el producto " + id,
                url: "/api/products/" + id,
                data: productoById
            })
        }
    }
}


module.exports = productsAPIController;