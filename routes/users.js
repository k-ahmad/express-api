var express = require('express');
var router = express.Router();
const { registerUser, getUsers, getUserById, updateUser } = require("../controllers/userControllers");

router.post('/', registerUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
module.exports = router;
