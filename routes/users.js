var express = require('express');
var router = express.Router();
const { registerUser,getUser } = require("../controllers/userControllers");

router.post('/register', registerUser);
router.get('/', getUser);


module.exports = router;
