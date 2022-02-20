let carrito = function(req, res, next){
    res.locals.isCarrito = false
    let carritoSession = req.session.carritoSession;

    if(carritoSession){
        res.locals.isCarrito=true
    }


    next();

}
module.exports = carrito