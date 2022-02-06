const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const usersAPIController = {

    users: async (req, res) => {
        let usuarios = await db.Usuario.findAll({
            attributes: {exclude:["password"]}
        })
        usuarios.forEach(usuario => {usuario.dataValues["detalle"] = "/api/users/" + usuario.id})
        // console.log(usuarios)
        return res.status(400).json({
            message: "Estos son los usuarios registrados",
            url: "/api/users",
            data: usuarios
            
        })
    },

    userById: async (req, res) => {
        let id = req.params.id
        let usuarioById = await db.Usuario.findByPk(id, 
            {attributes: {exclude:["password"]}})

        if (usuarioById == undefined) {
            return res.status(404).json({
                message: "Este id de usuario no existe en este base de datos",
                url: "/api/users/" + id,
            })
        }
        else {
            return res.status(400).json({
                message: "Este es el usuario " + id,
                url: "/api/users/" + id,
                data: usuarioById
            })
        }
    }
}


module.exports = usersAPIController;

