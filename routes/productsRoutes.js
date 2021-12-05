const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController')
const multer = require ('multer')
const path = require('path')
const admin = require('../middlewares/admin')
const userGuest = require('../middlewares/userGuest')

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


router.get('/hombre/:id', productController.detalle)
router.get('/mujer/:id', productController.detalle)


router.get('/mujer', productController.mujer)
router.post('/', upload.single('imagen'), productController.store)

router.get('/hombre', productController.hombre)

router.get('/create', userGuest, admin, productController.create)

router.get('/:id/edit', userGuest, admin, productController.edit)
router.put('/:id', upload.single('imagen'), productController.update)

router.delete('/:id', productController.destroy)






module.exports = router;
