const usersController = {
  login: function (req, res) {
    res.render("sigIn-signOut-Form");
  },

  registro: function (req, res) {
    res.render("register_form");
  },

  miCuenta: function (req, res) {
    res.render("index");
  }

  
};

module.exports = usersController;
