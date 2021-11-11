const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController')
const multer = require ('multer')
const path = require('path')


let storage = multer.diskStorage({
    destination: function (req, res, cb) {
      let folder = path.join(__dirname, '../public/image/productos');
      cb(null, folder);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + path.extname(file.originalname));
    }
   })
   
const upload = multer ({storage:storage})


router.get('/hombre/:id', productController.producto)
router.get('/mujer/:id', productController.producto)

router.get('/mujer', productController.mujer)
router.post('/', upload.single('imagen'), productController.store)

router.get('/hombre', productController.hombre)

router.get('/create', productController.create)

router.get('/:id/edit', productController.edit)
router.put('/:id', upload.single('imagen'), productController.update)






module.exports = router;
