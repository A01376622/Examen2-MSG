const path = require("path");
const iPhone = require("../utils/database").models.iPhone;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");

// Proceso cuando se llame a la ruta
exports.getAltaIPhone = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}

exports.postAltaIPhone = (req,res)=>{
    console.log(req.body)
    //INSERT INTO Consola VALUES ()
    iPhone.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");//Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Ocurrio un error")//Cliente
        })    
}

exports.getIphones = (req,res)=>{
    //SELECT * from Consola;
    iPhone.findAll()
        .then(consolas=>{
            console.log("iPhones",consolas);
            res.send(consolas);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

exports.postEliminarIPhone=(req,res)=>{
    //DELETE FROM Consola WHERE id=
    console.log(req.body)
    iPhone.destroy({
        where:{
            id : req.body.id
        }
    }).then(()=>{
        console.log("iPhone eliminado")
        res.send("iPhone eliminado")
    }).catch(e=>{
        console.log(e)
        res.send("Error")
    })
}

// exports.postActualizarIPhone=(req,res)=>{
//     //UPDATE Consola SET WHERE id=
//     console.log(req.body)
//     iPhone.update({nombre: req.body.nombreConsola},{
//         where:{
//             id: req.body.id
//         }
//     }).then(()=>{
//         console.log("iPhone actualizado")
//         res.send("iPhone actualiza")
//     }).catch(e=>{
//         console.log(e)
//         res.send("Error")
//     })
// }

exports.getConsultaIPhone = (req,res)=>{
    res.send('<h1>Datos de los iPhones</h1>')
}

