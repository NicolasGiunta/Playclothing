module.exports = (sequelize, dataTypes) => {
    let alias = 'Tipo';
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
        tableName: 'tipos'
    }
    const Tipo = sequelize.define(alias, cols, config); 

  
    Tipo.associate = function(models) {
        Tipo.hasMany(models.Producto, { 
            as: "productos", // El nombre del modelo pero en plural
            foreignKey: "tipo_id"
        })
    }

    return Tipo
};