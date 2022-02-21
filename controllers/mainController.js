const emailer = require('../config/emailer');

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
     },

     contacto: function(req, res) {
         res.render('contacto')
     },

     newsLetter: function(req,res){
        try{
            let email = req.body.email;
            console.log(email)
            emailer.sendMail(email)
          }catch(e){
            console.log(e)
          }
          res.redirect ('/')
    }


}


module.exports = mainController;