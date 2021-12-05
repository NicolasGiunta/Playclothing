let userLoggedDenied = function (req, res, next){
    let userLogged = req.session.userLogged;
    
    if(userLogged){
        return res.redirect('/')
    }
    next()
    }

module.exports = userLoggedDenied;