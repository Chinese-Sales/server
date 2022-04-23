const User = require("../models/user.model").User;

module.export.getAllUsers = async (req, res) => {
    const users = await Product.find({});
    return res.send(users);
}