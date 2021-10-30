const mainController = {
    index: function (req, res) {
        res.render('index')
},
    tyc: function (req, res) {
        res.render('tyc')

},

    politicas: function (req, res) {
          res.render('politicas')

},

    preguntas: function (req, res) {
         res.render('preguntas')
     }


}


module.exports = mainController;