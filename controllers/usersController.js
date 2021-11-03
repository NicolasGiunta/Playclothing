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
     email:req.body.email,
     password: req.body.password
    }
  
      //guardarla falta ver bases de datos
  
    res.redirect("/")
  }

  
};

module.exports = usersController;
