const userModel = require('../models/userModels');

const registerUser = (req, res) => {
    const { name, email, password, phone, address } = req.body;

    const new_user = userModel.register({ name, email, password, phone, address });

    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: new_user
    });
}

module.exports = { registerUser };