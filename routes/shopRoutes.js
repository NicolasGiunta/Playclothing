const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController')

router.get('/', shopController.index)
router.post('/', shopController.create)
router.post('/menos', shopController.menos)
router.post('/mas', shopController.mas)
router.delete('/eliminar', shopController.eliminar)
router.delete('/checkout', shopController.checkout)

module.exports = router;