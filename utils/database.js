//Configuración de sequelize
const Sequelize = require('sequelize');
// const {applyRelations} = require('./relations');
//objeto de conexión

const sequelize = new Sequelize('examen_MSG','admin','Tomlinson20:)',{
    dialect:'mysql',
    host:'database-1.cnpx6kyynieb.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //Características especiales de la conexión
        }
    },
    define:{
        timestamps: false,
        freezeTableName:false
    }
});

//Cargar los modelos
const modelDefiners =[
    require('../models/iphone'),
];

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);   
}

//Generar las relaciones entre las tablas
// applyRelations(sequelize);

//Exportar el objeto sequelize

module.exports = sequelize;
