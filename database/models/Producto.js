module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombreDelProducto: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(900),
        },
        precio: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },

        color: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        categoria_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        tipo_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'productos'
    }
    const Producto = sequelize.define(alias, cols, config); 

    Producto.associate = function (models) {
        Producto.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "categoria_id"
        })

        Producto.belongsTo(models.Tipo, {
            as: "tipo",
            foreignKey: "tipo_id"
        })

        Producto.belongsToMany(models.Talla, { 
            as: "tallas",
            through: 'producto_talla',
            foreignKey: 'producto_id',
            otherKey: 'talla_id',
            timestamps: false
        })
    }

    return Producto
};