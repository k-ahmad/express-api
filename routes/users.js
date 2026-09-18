var express = require('express');
var router = express.Router();
const { registerUser, getUsers } = require("../controllers/userControllers");

router.post('/', registerUser);
router.get('/', getUsers);


module.exports = router;
