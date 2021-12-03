const { validationResult } = require('express-validator');
const bcryptjs = require('bcrypt')  
const UserModel = require('../models/User');
const cookieParser = require('cookie-parser');


let usuarios = UserModel.getData();

const usersController = {

  registro: function (req, res) {
    res.render("register_form");
  },

  //para guardar la infor de un usuario nuevo y que lo eenvie al home
  create:  function (req, res) {
let errors = validationResult(req);

if(!errors.isEmpty()){
res.render('register_form', {errors: errors.mapped(), old: req.body})
}else{
    let userData = {
    nombre:req.body.nombre,
    apellido:req.body.apellido,
    categoria:req.body.categoria,
    email:req.body.email,
    sexo:req.body.sexo,
    password: req.body.password,
    password: bcryptjs.hashSync(req.body.password, 10),
    imagen: req.file.filename
    }

    let email = req.body.email;

if(UserModel.findByEmail('email', email) != undefined){
res.render('register_form', {errors: {email: {msg: "este mail ya se encuentra registrado"}}})
}else{
  UserModel.create(userData);
}
return res.redirect('/cuenta')
}
},
login: function (req, res) {
  res.render("sigIn-signOut-Form");
},

loginProcess: function(req, res){
  if(!errors.isEmpty()){
    res.render('register_form', {errors: errors.mapped(), old: req.body})
    }else{
let email = req.body.email;
let userToLogin =UserModel.findByEmail('email', email)
      if (userToLogin == undefined){
res.render('register_form', {errors: {email: {msg: "este mail no se encuentra registrado"}}})
      } else if (!bcryptjs.compareSync(req.body.password, userToLogin.password)){
        res.render('register_form', {errors: {password: {msg: "las credenciales no coinciden"}}})
      }
      else {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        if(req.body.recordarme){
          let email = userToLogin.email;
          res.cookie('recordarme', email, {maxAge: 60000 * 5})
        }
        return res.redirect('/')
      }
      }
}



}



module.exports = usersController;