module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'categorias'
    }
    const Categoria = sequelize.define(alias, cols, config); 

  
    Categoria.associate = function(models) {
        Categoria.hasMany(models.Producto, { 
            as: "productos", // El nombre del modelo pero en plural
            foreignKey: "categoria_id"
        })
    }

    return Categoria
};