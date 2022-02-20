module.exports = (sequelize, dataTypes) => {
    let alias = 'Carrito';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        producto_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        
        producto_nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        precio_producto: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        imagen_producto: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },

        usuario_id:{
            type: dataTypes.INTEGER.UNSIGNED
        }

        
        
    };
    let config = {
        timestamps: false,
        tableName: 'carrito'
    }
    const Carrito = sequelize.define(alias, cols, config); 

    

    return Carrito
};