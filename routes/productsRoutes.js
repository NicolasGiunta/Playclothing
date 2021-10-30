const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController')

router.get('/', productController.index)

router.get('/mujer', productController.mujer)

router.get('/hombre', productController.hombre)

module.exports = router;