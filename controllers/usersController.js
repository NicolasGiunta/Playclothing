const path = require('path');
const fs = require('fs');
const UsersFilePath = path.join(__dirname, '../data/users.json');
const listaUsuarios = fs.readFileSync(UsersFilePath, 'utf-8');  
const UserModel = require('../models/User')


const usersController = {
  login: function (req, res) {
    res.render("sigIn-signOut-Form");
  },

  registro: function (req, res) {
    res.render("register_form");
  },

  miCuenta: function (req, res) {
    res.render("index");
  },

  //para guardar la infor de un usuario nuevo y que lo eenvie al home
  create:  function (req, res) {
    let usuario = {
    id: nuevoId(),
    nombre:req.body.nombre,
    apellido:req.body.apellido,
    categoria:req.body.categoria,
    email:req.body.email,
    sexo:req.body.sexo,
    password: req.body.password
    }
usuarios.push(usuario)
usuariosJSON = JSON.stringify(usuarios);
fs.writeFileSync(UsersFilePath, usuariosJSON)  
res.redirect('/')
}


}



module.exports = usersController;