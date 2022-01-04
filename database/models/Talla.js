module.exports = (sequelize, dataTypes) => {
    let alias = 'Talla';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        valor: {
            type: dataTypes.STRING(5),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'tallas'
    }
    const Talla = sequelize.define(alias, cols, config); 

    Talla.associate = function (models) {
    Talla.belongsToMany(models.Producto, { 
        as: "productos",
        through: 'producto_talla',
        foreignKey: 'talla_id',
        otherKey: 'producto_id',
        timestamps: false

    })

}

    return Talla
};