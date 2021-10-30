const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController')

router.get('/hombre/producto1', productController.producto)

router.get('/mujer', productController.mujer)

router.get('/hombre', productController.hombre)

module.exports = router;