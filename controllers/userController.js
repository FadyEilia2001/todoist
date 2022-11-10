const register = (req, res) => {
  res.json({ msg: "create User Here" });
};

const login = (req, res) => {
  res.json({ msg: "login User Here" });
};

module.exports = { register, login };
