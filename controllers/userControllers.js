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

const getUser = (req, res) => {
    const user = userModel.getUser();

    res.status(200).json({
        success: true,
        message: 'User fetched successfully',
        data: user
    });
}

module.exports = { registerUser, getUser };