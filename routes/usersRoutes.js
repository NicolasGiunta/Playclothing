const express = require('express');
const router = express.Router();
const path = require('path');
const { body } = require('express-validator')
const multer = require ('multer')
const usersController = require("../controllers/usersController");
const userGuestMiddleware = require('../middlewares/userGuest')
const userLoggedDenied = require('../middlewares/userLoggedDenied')

let storage = multer.diskStorage({
    destination: function (req, res, cb) {
      let folder = path.join(__dirname, '../public/image/users');
      cb(null, folder);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + path.extname(file.originalname));
    }
   })
   
const upload = multer ({storage:storage})


const validations = [
    body('nombre').notEmpty().withMessage('Escribe tu nombre'),
    body('apellido').notEmpty().withMessage('Escribe tu apellido'),
    body('email').notEmpty().withMessage('Escribe tu email').bail().isEmail().withMessage('Debes ingresar un email válido'),
    body('password').notEmpty().withMessage('Escribe tu contraseña').bail().isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }).withMessage('La contraseña debe tener como mínimo 8 caractéres, incluídos 1 letra mayúscula, 1 minúscula y 1 caracter especial'),
    body('confirmPassword').notEmpty().withMessage('Escribe tu contraseña').bail().custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas no coinciden');
        }
        // Indicates the success of this synchronous custom validator
        return true
      }),
    body('sexo').notEmpty().withMessage('Elige un sexo')
    // body('imagen').custom((value, { req }) => {
    //     let file = req.file;
    //     let acceptedExtensions = ['.jpg', '.png', '.gif'];

    //     if (!file) {
    //         throw new Error('Tienes que subir una imagen')
    //     }
    //     else {
    //         let originalName = path.extname(file.originalname)
    //         if(!acceptedExtensions.includes(originalName)) {
    //             throw new Error(`El formato permitido de imágenes es ${acceptedExtensions}`)
    //         }
    //     }
    //     return true
    // })

]

const validationsLogin = [
    body('email').notEmpty().withMessage('Escribe tu email').bail().isEmail().withMessage('Debes ingresar un email válido'),
    body('password').notEmpty().withMessage('Escribe tu contraseña')
]



router.get('/', userLoggedDenied, usersController.login);
router.post('/', validationsLogin, usersController.loginProcess)

router.get("/registro", userLoggedDenied, usersController.registro);
router.post("/registro", upload.single('imagen'), validations, usersController.create);

router.get('/micuenta',userGuestMiddleware, upload.single('imagen'), usersController.cuenta);
router.get('/logout', usersController.logout);


module.exports = router;
