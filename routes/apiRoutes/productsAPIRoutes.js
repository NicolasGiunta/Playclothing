const express = require('express');
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController");


router.get('/' , productsAPIController.products);
router.get('/:id' , productsAPIController.productById)


module.exports = router;