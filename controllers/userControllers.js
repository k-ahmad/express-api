const userModel = require('../models/userModels');

const registerUser = async (req, res) => {
    const { name, email, password, phone, address } = req.body;

    const new_user = await userModel.register({ name, email, password, phone, address });

    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: new_user
    });
}

const getUsers = async (req, res) => {
    const users = await userModel.getUsers();

    res.status(200).json({
        success: true,
        message: 'User fetched successfully',
        data: users
    });
}
const getUserById = async (req, res) => {
    let userId = req.params.id;
    const user = await userModel.getUserById(userId);

    res.status(200).json({
        success: true,
        message: 'User fetched successfully',
        data: user
    });
}

module.exports = { registerUser, getUsers, getUserById };