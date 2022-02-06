const express = require('express');
const router = express.Router();
const usersAPIController = require("../../controllers/api/usersAPIController");


router.get('/' , usersAPIController.users);
router.get('/:id' , usersAPIController.userById)


module.exports = router;
