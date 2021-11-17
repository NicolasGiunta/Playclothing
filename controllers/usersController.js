const path = require('path');
const fs = require('fs');
const UsersFilePath = path.join(__dirname, '../data/users.json');
let usuarios;
const listaUsuarios = fs.readFileSync(UsersFilePath, 'utf-8');  
if (listaUsuarios == ""){
  usuarios=[];
}else{
  usuarios=JSON.parse(listaUsuarios)
}

const nuevoId = () => {
  let ultimo = 0;
  usuarios.forEach(usuario => {
    if (usuario.id > ultimo) {
      ultimo = usuario.id;
    }
  });
  return ultimo + 1;
}


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