const UserModel = require("../models/UserModel");

const register = async (req, res) => {
  const { firstName, email, password } = req.body;
  const user = await UserModel.create(req.body);
  res.json(user);
};

const login = (req, res) => {
  res.json({ msg: "login User Here" });
};

module.exports = { register, login };
