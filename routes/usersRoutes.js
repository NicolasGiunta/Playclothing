const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.login);

router.get("/registro", usersController.registro);

router.post("/registro", usersController.create);

module.exports = router;
