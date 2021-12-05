const UserModel = require('../models/User');

let userLogged = function (req, res, next){

res.locals.isLogged = false;
let emailFromCookie = req.cookies.recordarme;
let userFromCookie = UserModel.findByEmail('email', emailFromCookie)

let userSession = req.session.userLogged;

if (userFromCookie){
    req.session.userLogged = userFromCookie;
}
if (userSession){
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;

}


next()
}

module.exports = userLogged;