module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductoTalla';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        talla_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        producto_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
        tableName: 'producto_talla'
    }
    const ProductoTalla = sequelize.define(alias, cols, config); 



    return ProductoTalla
};