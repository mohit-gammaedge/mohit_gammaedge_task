
const users = require("../models/userModel");

// 1. GET - Fetch all users
const getUsers = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: users
    });
};


// 2. POST - Create new user
const createUser = (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || age === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, email and age are required"
        });
    }

    const newUser = {
        id: users.length
            ? Math.max(...users.map(user => user.id)) + 1
            : 1,
        name,
        email,
        age: Number(age)
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser
    });
};


// 3. PUT - Update existing user
const updateUser = (req, res) => {
    const userId = Number(req.params.id);

    const { name, email, age } = req.body;

    const userIndex = users.findIndex(
        user => user.id === userId
    );

    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    if (!name || !email || age === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, email and age are required"
        });
    }

    users[userIndex] = {
        id: userId,
        name,
        email,
        age: Number(age)
    };

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: users[userIndex]
    });
};


// 4. DELETE - Delete existing user
const deleteUser = (req, res) => {
    const userId = Number(req.params.id);

    const userIndex = users.findIndex(
        user => user.id === userId
    );

    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const deletedUser = users.splice(userIndex, 1);

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: deletedUser[0]
    });
};


// Export all controllers
module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
