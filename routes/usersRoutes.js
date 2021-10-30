const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.login);

router.get("/registro", usersController.registro);

router.post("/miCuenta", (req, res) =>{
    res.redirect("/")
});

module.exports = router;
