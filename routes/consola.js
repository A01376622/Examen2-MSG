const express = require('express');
const router = express.Router();
const consolaController= require('../controllers/consola')
//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas
//Servicio para mostrar el formulario
router.get('/altaIPhone',consolaController.getAltaIPhone);
//Servicio para procesar los datos del formulario
router.post('/altaIPhone',consolaController.postAltaIPhone);
//Servicio para consultar todos los datos
router.get('/consultaIPhones',consolaController.getIphones);
//Servicio para eliminar un registro por id
router.post('/bajaIPhone', consolaController.postEliminarIPhone);
// //Servicio para actualizar las consola
// router.post('/actualizarIPhone',consolaController.postActualizarIPhone);

module.exports = router