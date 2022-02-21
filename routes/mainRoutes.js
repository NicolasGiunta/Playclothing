const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.index)
router.post('/', mainController.newsLetter)
router.get('/terminos-condiciones', mainController.tyc)
router.get('/politicas-de-privacidad', mainController.politicas)
router.get('/faq', mainController.preguntas)
router.get('/contacto', mainController.contacto)


module.exports = router;