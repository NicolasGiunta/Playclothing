module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
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
        },
        apellido: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(400),
            allowNull: false
        },
        sexo: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        isAdmin: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
        
    };
    let config = {
        timestamps: false,
        tableName: 'usuarios'
    }
    const Usuario = sequelize.define(alias, cols, config); 

    

    return Usuario
};