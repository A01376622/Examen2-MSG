const Sequelize = require('sequelize');

const iPhone = (sequelize)=>{
    sequelize.define('iPhone',{
        //Forma especifica de declarar atributos
        nombre: Sequelize.STRING,
        color: Sequelize.STRING,
        capacidad: Sequelize.STRING
    })
}

module.exports = iPhone;