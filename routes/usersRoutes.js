const express = require('express');
const router = express.Router();
const path = require('path');
const { body } = require('express-validator')
const usersController = require("../controllers/usersController");

const validations = [
    body('nombre').notEmpty().withMessage('Escribe tu nombre'),
    body('apellido').notEmpty().withMessage('Escribe tu apellido'),
    body('email').notEmpty().withMessage('Escribe tu email').bail().isEmail().withMessage('Debes ingresar un email válido'),
    body('constraseña').notEmpty().withMessage('Escribe tu contraseña').bail().isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }).withMessage('La contraseña debe tener como mínimo 8 caractéres, incluídos 1 letra mayúscula, 1 minúscula y 1 caracter especial'),
    body('confirmarContraseña').notEmpty().withMessage('Escribe tu contraseña').bail().custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas no coinciden');
        }

        // Indicates the success of this synchronous custom validator
        return true
      }),
    body('sexo').notEmpty().withMessage('Elige un sexo')
]

const validationsLogin = [
    body('email').notEmpty().withMessage('Escribe tu email').bail().isEmail().withMessage('Debes ingresar un email válido'),
    body('contraseña').notEmpty().withMessage('Escribe tu contraseña')
]



router.get('/', userController.login);
router.post('/', validationsLogin, userController.loginProcess)

router.get("/registro", usersController.registro);
router.post("/registro", validations, usersController.create);

module.exports = router;
