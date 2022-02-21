const { validationResult } = require('express-validator');
const bcryptjs = require('bcrypt')
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");



//let usuarios = UserModel.getData();

const usersController = {

  registro: function (req, res) {
    res.render("register_form");
  },

  //para guardar la infor de un usuario nuevo y que lo envie al home
  create: function (req, res) {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('register_form', { errors: errors.mapped(), old: req.body })
    } else {
      let email = req.body.email;
      db.Usuario.findOne({
        where: {
          email: email
        }
      })

        .then(userFindByEmail => {
          if (userFindByEmail != undefined) {
            res.render('register_form', { errors: { email: { msg: "este mail ya se encuentra registrado" } } })
          } else {
            db.Usuario.create({
              nombre: req.body.nombre,
              apellido: req.body.apellido,
              categoria: req.body.categoria,
              email: req.body.email,
              sexo: req.body.sexo,
              password: bcryptjs.hashSync(req.body.password, 10),
              imagen: req.file === undefined ? "/image/users/userDefault.png" : "/image/users/"+req.file.filename
            })
            return res.redirect('/cuenta')


          }

        })

    }
  },
  login: function (req, res) {
    res.render("sigIn-signOut-Form");
  },

  loginProcess: function (req, res) {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('sigIn-signOut-Form', { errors: errors.mapped(), old: req.body })
    } else {
      let email = req.body.email;
      db.Usuario.findOne({
        where: {
          email: email
        }
      })
      .then(userToLogin => {
        console.log(userToLogin)
        if(userToLogin == null){
          return res.render('sigIn-signOut-Form', { errors: { email: { msg: "Este mail no se encuentra registrado" } } })
        } else if (!bcryptjs.compareSync(req.body.password, userToLogin.password)) {
          return res.render('sigIn-signOut-Form', { errors: { password: { msg: "Las credenciales no coinciden" } } })
        }
        else {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          if (req.body.recordarme) {
            let email = userToLogin.email;
            res.cookie('recordarme', email, { maxAge: 60000 * 5 })
          }
          return res.redirect('/')
        }

        })
        .catch(function (err) {
          console.log(err)
        })
      }
     
      
  },
  cuenta: function (req, res) {
    let userLogged = req.session.userLogged;
    res.render('miCuenta', { userLogged })
  },

  edit: (req, res) => {

    let userLogged = req.session.userLogged;
    res.render('userEdit', { userLogged })


  },

  update:(req, res) =>{

    let userLogged = req.session.userLogged;
    let userId = userLogged.id;
    let errors = validationResult(req);

    console.log(req.session)

    db.Usuario.findOne({
      where: {
        id: userId 
      }
    })
    .then(usuario => {
      if (!errors.isEmpty()) {
        res.render('userEdit', { errors: errors.mapped(), old: req.body })
      } else if (!bcryptjs.compareSync(req.body.currentPassword, usuario.password)) {
        return res.render('userEdit', { errors: { currentPassword: { msg: "La contraseña es inválida" } } })
        
        }else {
          req.session.destroy();
          db.Usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            categoria: req.body.categoria,
            email: req.body.email,
            sexo: req.body.sexo,
            password: bcryptjs.hashSync(req.body.password, 10),
            imagen: req.file === undefined ? "/image/users/userDefault.png" : "/image/users/"+req.file.filename
          },
          {
            where: {
              id: userId 
            }
          })
          return res.redirect('/cuenta')
        }
          
    })
    
    
      
  },

  logout: function (req, res) {
    res.clearCookie('recordarme')
    delete req.session.userLogged;
    return res.redirect('/')
  },

  delete:(req,res) => {
    db.Usuario.destroy({
        where:{
            id:req.params.id
        }
    })
    res.clearCookie("email")
    delete req.session.userLogged;
    res.redirect("/cuenta")
}
}


module.exports = usersController;