const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController')
const multer = require ('multer')
const { body } = require('express-validator')
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

const validations = [
  body('nombreDelProducto').notEmpty().withMessage('Escribe el nombre del producto'),
  body('descripcion').notEmpty().withMessage('Escribe una descripción del producto'),
  body('precio').notEmpty().withMessage('Escribe final del producto').bail().isInt().withMessage('Debes ser un número entero superior a 0'),
  body('color').notEmpty().withMessage('Escribe el color del producto'),
  body('talla').notEmpty().withMessage('Elige las tallas del producto'),
  body('categoria').notEmpty().withMessage('Elige la categoría a la que pertenece el producto'),
  body('tipo').notEmpty().withMessage('Elige el tipo de producto'),
  body('imagen').custom((value, { req }) => {
      let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];

    if (!file) {
        throw new Error('Tienes que subir la imagen del producto')
       }
       else {
           let originalName = path.extname(file.originalname)
           if(!acceptedExtensions.includes(originalName)) {
               throw new Error(`El formato permitido de imágenes es ${acceptedExtensions}`)
           }
       }
       return true
   })

]


router.get('/', productController.search)
router.get('/mujer', productController.mujer)
router.get('/hombre', productController.hombre)
router.get('/hombre/:id', productController.detalle)
router.get('/mujer/:id', productController.detalle)


router.get('/create', userGuest, admin, productController.create)
router.post('/create', upload.single('imagen'), validations, productController.store)

router.get('/:id/edit', userGuest, admin, productController.edit)
router.put('/:id', upload.single('imagen'), validations, productController.update)



router.delete('/:id', productController.destroy)






module.exports = router;
