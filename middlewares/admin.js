let admin = function (req, res, next){
    let adminLogged = req.session.userLogged
    if(adminLogged.perfil=="administrador"){
        next()
    }
    else{
        res.redirect('/')
    }
}

module.exports = admin;