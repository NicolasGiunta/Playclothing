const db = require("../database/models")
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { checkout } = require("../routes/shopRoutes");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const shopController = {


    

    index: async function(req,res){
        let productos = await db.Carrito.findAll({
            where:{
                cantidad:{[Op.gt]:0}
            }
        })
        
        if(productos.length>0){
            req.session.carritoSession= 1
        }else{
            delete req.session.carritoSession;
        }
        
        res.render("carrito_compras",{
            productos, toThousand
        });
    },

    create: async(req, res)=>{
        let id = req.body.boton;
        let producto = await db.Producto.findByPk(id)
        let encontrado = await db.Carrito.findOne({
            where:{
                producto_id:id
            }
        })
         if (!encontrado ){
             await db.Carrito.create({
                 
                producto_id: producto.id,
                producto_nombre: producto.nombreDelProducto,
                precio_producto: producto.precio,
                imagen_producto: producto.imagen,
                cantidad:1
             })
         }else{
             await db.Carrito.update({
                
                producto_nombre: encontrado.nombreDelProducto,
                precio_producto: encontrado.precio,
                imagen_producto: encontrado.imagen,
                cantidad:encontrado.cantidad+1
             },{
                 where:{
                    producto_id:id
             }
            })
        req.session.carritoSession= producto 
        }
         res.redirect("/carrito")
        
    },

    menos: async(req, res) =>{
        let id = req.body.botonMenos;
        let encontrado = await db.Carrito.findOne({
            where:{
                producto_id:id
            }
        })
        

                await db.Carrito.update({
                    producto_nombre: encontrado.nombreDelProducto,
                    precio_producto: encontrado.precio,
                    imagen_producto: encontrado.imagen,
                    cantidad:encontrado.cantidad-1
                 },
                 {
                     where:{
                        producto_id:id
                 }
                })
                .catch(function(e){
                    console.log(e)
                })

            
        
        
       
        
        res.redirect("/carrito");

    
    
     },

     mas: async(req, res) =>{
        let id = req.body.botonMas;
        let encontrado = await db.Carrito.findOne({
            where:{
                producto_id:id
            }
        })

        

        await db.Carrito.update({
            producto_nombre: encontrado.nombreDelProducto,
            precio_producto: encontrado.precio,
            imagen_producto: encontrado.imagen,
            cantidad:encontrado.cantidad+1
         },{
             where:{
                producto_id:id
         }
        })
        // let productos = await db.Carrito.findAll()
        res.redirect("/carrito");

    

     },

     eliminar:(req, res) =>{
        let id = req.body.botonEliminar;
        db.Carrito.destroy({
            where:{
                producto_id:id
            }
          })
      
        .catch(error => console.log(error));
      res.redirect('/carrito');

    },
    
    checkout: (req,res) =>{
        db.Carrito.destroy({
            where:{
                usuario_id:1
            }
        })

        delete req.session.carritoSession

        res.redirect('/cuenta')

        
    }

    
}

module.exports=shopController;