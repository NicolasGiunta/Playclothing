let admin = function (req, res, next){
    let adminLogged = req.session.userLogged
    if(adminLogged.isAdmin === true){
        next()
    }
    else{
        res.redirect('/')
    }
}

module.exports = admin;